import React from "react";
import "./Contacts.css"; // Імпортуємо стилі для розділу "Контакти"

function Contacts() {
  return (
    <div className="contacts-container">
      <div className="contact-details">
        <h2>Контактна інформація</h2>
        <ul>
          <li>
            <strong>Телефон:</strong> +380950901799
          </li>
          <li>
            <strong>Email:</strong> yana2015.2004@gmail.com
          </li>
          <li>
            <strong>Адреса:</strong> Україна, Полтава, Першотравневий Проспект,
            24
          </li>
        </ul>
      </div>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499460.89416436916!2d34.95458986947254!3d49.57720976927401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127e221b644bf3d%3A0xa7973f2b8d9be893!2z0JPQu9Cw0YXQsNC60LjQuSDQutC-0LLQuNCx0YHQutCwLCAyNCwg0JzQuNGA0LDRgdC60LDRjyDQvtCx0LsuLCAwMTM0MDA!5e0!3m2!1suk!2sua!4v1623203666237!5m2!1suk!2sua"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacts;
