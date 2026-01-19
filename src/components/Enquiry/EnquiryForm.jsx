import { useState } from "react";
import "./EnquiryForm.scss";

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://formspree.io/f/mnjjvwjz",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "", subject: "" });
    } else {
      setStatus("Error sending message.");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <input aria-label="nombre"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <label>Nombre</label>
        </div>
        <div className="form-field">
          <input aria-label="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <label>Correo electrónico</label>
        </div>
        <div className="form-field">
          <select
            name="subject"
            aria-label="escoger idioma"
            onChange={handleChange}
            value={formData.subject}
            required
          >
            <option value="ingles">Inglés</option>
            <option value="frances">Francés</option>
            <option value="español">Español</option>
            <option value="otro">Otro...</option>
          </select>
          <label>Selecciona</label>
        </div>
        <div className="form-field">
          <textarea
            name="message"
            aria-label="mensaje"
            onChange={handleChange}
            value={formData.message}
            required
          ></textarea>
          <label>Tu mensaje</label>
        </div>
        <div className="field-tc">
          {/* <input aria-label="terminos y condiciones" type="checkbox" id="" name="check" value="" />
          <label htmlFor="">Acepto el tratamiento de mis datos</label> */}
          <input aria-label="hidden" type="hidden" name="_next" value="" />
        </div>
        <div className="submit-field">
          <input aria-label="submit" type="submit" />
          <p>{status}</p>
        </div>
      </form>
    </>
  );
}

export default EnquiryForm;
