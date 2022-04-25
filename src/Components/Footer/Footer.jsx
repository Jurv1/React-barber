import React from 'react'
import './Footer'
const Footer = (props) => {
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="footer__row">
                        <nav class="footer__menu">
                            <ul class="footer__list">
                                <li class="footer_item">+7 (999) 999-99-99</li>
                                <li class="footer_item">
                                    <a href="https://vk.com/id123454360" target= '_blank'class="footer__link">VK</a>
                                </li>
                                <li class="footer_item">
                                    <a href="#" class="footer__link">INSTAGRAM</a>
                                </li>
                                <li class="footer_item">Конец.</li>
                                <li class="footer_item">Все права защищены Николаем</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer