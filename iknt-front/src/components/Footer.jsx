export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-column">
                <img src="/src/assets/logoIKNT.png" alt="ИКНТ логотип" className="footer-logo" style={{ scale: "0.7" }} />
                <p>© Институт компьютерных наук и технологий ПГНИУ</p>
            </div>

            <div className="footer-column">
                <h3>КОНТАКТЫ</h3>
                <p><strong>Адрес:</strong> г. Пермь, ул. Генкеля, корп. 8, ауд.410</p>
                <p><strong>Телефон:</strong> +7 (342) 239-67-20</p>
                <p><strong>Электронная почта:</strong> iknt@psu.ru</p>
            </div>

            <div className="footer-column">
                <h3>ПО ВОПРОСАМ ПОСТУПЛЕНИЯ</h3>
                <p><strong>Электронная почта:</strong> ict_pk@psu.ru</p>
                <p><strong>Телеграм-канал для абитуриентов</strong></p>
            </div>
        </footer>
    )
}