import { Typography, Box, Button } from "@mui/material";
import logoNP from "@/assets/np-logomark-red.png";
import { PageWrapper } from "@/components/ui";
import { ContactsFields, NovaPoshtaFields } from "@/components/checkout";

const boxStyles = {
  width: "50%",
  p: 4,
  m: 2,
  border: "1px solid rgba(0, 0, 0, 0.2)",
  borderRadius: "15px",
};

export const DeliveryPage = () => {
  return (
    <PageWrapper sx={{ justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          height: "fitContent",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Box sx={boxStyles}>
          <Typography variant="h4" pb={2}>
            {" "}
            Контакти{" "}
          </Typography>
          <ContactsFields />
        </Box>
        <Box sx={boxStyles}>
          <Typography variant="h4"> Доставка </Typography>
          {/* Nova poshta wrapper */}
          <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
            <Box
              component={"img"}
              src={logoNP}
              sx={{ height: "2em", width: "2em" }}
            />{" "}
            <Typography variant="h6">Нова Пошта </Typography>
          </Box>
          <NovaPoshtaFields />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: 2,
        }}
      >
        <Button variant="contained" size="large" disabled>
          Оформити
        </Button>
      </Box>
    </PageWrapper>
  );
};
