import { useState, useMemo, useEffect, useRef } from "react";
import {
  TextField,
  Box,
  Paper,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import debounce from "lodash.debounce";

import { getCities, getWarehouses } from "@/services/modules/novaPoshta";

export const NovaPoshtaFields = ({ onChange }) => {
  const [city, setCity] = useState(null);
  const [warehouse, setWarehouse] = useState(null);

  const [cityOptions, setCityOptions] = useState([]);
  const [warehouseOptions, setWarehouseOptions] = useState([]);

  const [loadingCities, setLoadingCities] = useState(false);
  const [loadingWarehouses, setLoadingWarehouses] = useState(false);

  const [warehouseOpen, setWarehouseOpen] = useState(false);
  const [warehouseInput, setWarehouseInput] = useState("");

  const warehouseContainerRef = useRef(null);

  // =====================
  // МІСТА
  // =====================
  const fetchCities = async (query) => {
    if (!query || query.length < 2) return;
    setLoadingCities(true);
    try {
      const data = await getCities(query);
      setCityOptions(
        data.map((item) => ({ label: item.Description, ref: item.Ref })),
      );
    } catch (e) {
      console.error(e);
    }
    setLoadingCities(false);
  };

  const debouncedCities = useMemo(() => debounce(fetchCities, 400), []);

  // =====================
  // ВІДДІЛЕННЯ
  // =====================
  const fetchWarehouses = async (query = "") => {
    if (!city) return;
    setLoadingWarehouses(true);
    try {
      const data = await getWarehouses({ cityRef: city.ref, query });
      setWarehouseOptions(
        data.map((item) => ({ label: item.Description, ref: item.Ref })),
      );
    } catch (e) {
      console.error(e);
    }
    setLoadingWarehouses(false);
  };

  const debouncedWarehouses = useMemo(
    () => debounce(fetchWarehouses, 400),
    [city],
  );

  useEffect(() => {
    if (warehouseOpen && city) fetchWarehouses();
  }, [warehouseOpen, city]);

  useEffect(() => {
    setWarehouse(null);
    setWarehouseOptions([]);
    setWarehouseOpen(false);
  }, [city]);

  // закриття по кліку поза контейнером
  useEffect(() => {
    if (!warehouseOpen) return;
    const handleClickOutside = (e) => {
      // MUI Autocomplete рендерить listbox через Portal поза деревом DOM —
      // перевіряємо чи клік був всередині будь-якого MUI-попапу
      const isInsidePopper = e.target.closest(
        '[role="listbox"], [role="option"], .MuiAutocomplete-popper',
      );
      if (isInsidePopper || warehouseContainerRef.current?.contains(e.target)) {
        return;
      }
      setWarehouseOpen(false);
      setWarehouseInput("");
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [warehouseOpen]);

  // cleanup debounce
  useEffect(() => {
    return () => {
      debouncedCities.cancel();
      debouncedWarehouses.cancel();
    };
  }, [debouncedCities, debouncedWarehouses]);

  useEffect(() => {
    if (onChange) onChange({ city, warehouse });
  }, [city, warehouse, onChange]);

  const handleCloseWarehouseSearch = () => {
    setWarehouseOpen(false);
    setWarehouseInput("");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* МІСТО */}
      <Autocomplete
        options={cityOptions}
        loading={loadingCities}
        onInputChange={(e, value, reason) => {
          if (reason === "input") debouncedCities(value);
        }}
        onChange={(e, value) => setCity(value)}
        isOptionEqualToValue={(o, v) => o.ref === v.ref}
        noOptionsText="Нічого не знайдено"
        renderInput={(params) => (
          <TextField
            {...params}
            label="Місто"
            placeholder="Почніть вводити..."
          />
        )}
      />

      {/* ВІДДІЛЕННЯ */}
      {city && (
        <Box ref={warehouseContainerRef}>
          {/* Поле відображення — тільки для читання */}
          <TextField
            label="Відділення"
            value={warehouse?.label ?? ""}
            placeholder="Оберіть відділення"
            onClick={() => setWarehouseOpen(true)}
            fullWidth
            slotProps={{
              input: {
                readOnly: true,
                sx: { cursor: "pointer" },
                endAdornment: warehouse ? (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        setWarehouse(null);
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ) : null,
              },
              htmlInput: {
                sx: { cursor: "pointer" },
              },
            }}
          />

          {/* Пошук + список */}
          {warehouseOpen && (
            <Paper sx={{ p: 1, mt: 0.5 }}>
              <Autocomplete
                open
                disableClearable //прибрати вбудований хрестик (очищення значення) MUI
                options={warehouseOptions}
                loading={loadingWarehouses}
                inputValue={warehouseInput}
                // value потрібен щоб Autocomplete знав який пункт обрано
                value={warehouse}
                onInputChange={(e, value, reason) => {
                  if (reason === "input") {
                    setWarehouseInput(value);
                    debouncedWarehouses(value);
                  }
                }}
                onChange={(e, value) => {
                  setWarehouse(value); // ← зберігаємо обране
                  setWarehouseOpen(false);
                  setWarehouseInput("");
                }}
                isOptionEqualToValue={(o, v) => o.ref === v.ref}
                noOptionsText="Немає відділень"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Пошук відділення..."
                    autoFocus
                    slotProps={{
                      input: {
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {params.InputProps.endAdornment}
                            <InputAdornment position="end">
                              <IconButton
                                size="small"
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  handleCloseWarehouseSearch();
                                }}
                              >
                                <CloseIcon fontSize="small" />
                              </IconButton>
                            </InputAdornment>
                          </>
                        ),
                      },
                    }}
                  />
                )}
              />
            </Paper>
          )}
        </Box>
      )}
    </Box>
  );
};
