import React, { useState } from "react";

const JustNew = ({ onCreateTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    category: "work",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Task title is required");
      return;
    }

    const success = await onCreateTask(formData);
    if (success) {
      // Reset form
      setFormData({
        title: "",
        description: "",
        priority: "medium",
        category: "work",
      });
    }
  };

  return (
   <></>
  );
};

export default JustNew;
