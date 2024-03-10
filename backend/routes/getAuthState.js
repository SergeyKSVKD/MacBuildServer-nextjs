const { Router } = require('express')
const jwt = require('jsonwebtoken')
const router = Router()

const validUsers = [
    { email: 'admin@test.ru', password: '12345' }
]

router.post('/', async (req, res) => {
    try {
        const user = validUsers.find(item => {
            return item.email === req.body.email
        })
        if (user) {
            if (user.password === req.body.password) {
                const token = jwt.sign(
                    {
                        user: user,
                    },
                    'MacBuildServer',
                    { expiresIn: "1h" },
                )
                return res.json({ message: "Пользователь авторизован", token, })
            }
            else {
                return res.json({ message: 'Неправильный пароль' })
            }
        }
        else {
            return res.json({ message: 'Пользователь не найден' })
        }
    } catch (e) {
        res.status(500).json({
            message: 'Внутренняя ошибка сервера'
        })
    }
})

module.exports = router