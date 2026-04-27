import { useState } from "react";
import { TextField, Box } from "@mui/material";

export const ContactsFields = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 600,
      }}
    >
      <TextField
        label="Ім'я"
        value={form.firstName}
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
      />

      <TextField
        label="Прізвище"
        value={form.lastName}
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
      />

      <TextField
        label="Телефон"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
    </Box>
  );
};
