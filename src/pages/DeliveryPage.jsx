import Grid from "@mui/material/Grid2";
import { Typography, Box, Button } from "@mui/material";
import logoNP from "@/assets/np-logomark-red.png";
import { PageWrapper, SectionWrapper } from "@/components/ui";
import { ContactsFields, NovaPoshtaFields } from "@/components/checkout";

const wrapperStyles = {
  p: { xs: 2, sm: 4 },
  m: { xs: 0, sm: 2 },
  border: "1px solid rgba(0, 0, 0, 0.2)",
  borderRadius: "15px",
};

const columnSize = {
  md: 6,
  sm: 8,
  xs: 4,
};

export const DeliveryPage = () => {
  return (
    <PageWrapper sx={{ justifyContent: "center" }}>
      <SectionWrapper align="flex-start" sx={{ mt: { xs: 10, md: 0 } }}>
        {/************ Contacts ************/}
        <Grid item size={columnSize}>
          <Box sx={wrapperStyles}>
            <Typography variant="h4" pb={2}>
              {" "}
              Контакти{" "}
            </Typography>
            <ContactsFields />
          </Box>
        </Grid>
        {/************ Delivery ************/}
        <Grid item size={columnSize}>
          <Box sx={wrapperStyles}>
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
        </Grid>
        {/***************** Button *****************/}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            mt: 2,
          }}
        >
          <Button
            variant="contained"
            size="large"
            disabled
            sx={{ borderRadius: 10, px: 3.5, py: 1.5 }}
          >
            Оформити
          </Button>
        </Box>
      </SectionWrapper>
    </PageWrapper>
  );
};
