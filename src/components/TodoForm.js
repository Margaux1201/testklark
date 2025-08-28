import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm({ onAdd }) {
  // const [formData, setFormData] = useState({
  //   title: "",
  //   description: "",
  //   priority: "medium",
  //   dueDate: "",
  // });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formData[name] = value;
    setFormData(formData);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Le titre est requis";
    }

    if (title.length > 100) {
      newErrors.title = "Le titre ne peut pas dépasser 100 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onAdd({
        title: title,
        description: description,
        priority: priority,
        dueDate: dueDate,
      });
      console.log("Form envoyé");
    }
  };

  return (
    <div className="card">
      <h2>Nouvelle Tâche</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titre *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Entrez le titre de la tâche"
            className={errors.title ? "error" : ""}
          />
          {errors.title && (
            <span className="error-message">{errors.title}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description optionnelle"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priorité</label>
          <select
            id="priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Basse</option>
            <option value="medium">Moyenne</option>
            <option value="high">Haute</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dueDate">Date d'échéance</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Créer la tâche
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
