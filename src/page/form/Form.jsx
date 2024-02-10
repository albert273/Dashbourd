import { Alert, Button, MenuItem, Snackbar, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form"
import * as React from 'react';
import Header from '../../components/Header';



const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];






export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  const handleClick = () => {
    setOpen(true);
  };
  const onSubmit = () => {
    console.log("data")
    handleClick()
  }

  console.log(watch("example"))
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,

      }}
      noValidate
      autoComplete="off"
    >
      <Header title={"CREATE USER"} subTitle={"Create a New User Profile"} isDashboard={false} />
      <Stack
        direction={'row'}
        gap={2}
      >
        <TextField
          type='text'
          id="First Name"
          label="First Name"
          error={Boolean(errors.first)}
          helperText={errors.first ? "You should enter your Name" : null}
          {...register("first", { required: true })}
          sx={{ flex: 1 }}
        />
        <TextField
          type='text'
          id="Last Name"
          label="Last Name"
          error={Boolean(errors.last)}
          helperText={errors.last ? "You should enter your Name" : null}
          {...register("last", { required: true })}
          sx={{ flex: 1 }}
        />
      </Stack>


      <TextField
        error={Boolean(errors.number)}
        helperText={errors.number ? "You should enter your Number" : null}
        {...register("number", { required: true, pattern: phoneRegExp })}
        id="number"
        label="Number"
      />
      <TextField
        type='email'
        id="Email"
        label="Email"
        error={Boolean(errors.email)}
        helperText={errors.email ? "You should enter your Email" : null}
        {...register("email", { required: true, pattern: regEmail })}
      />
      <TextField
        type='text'
        id="Address"
        label="Address"
        error={Boolean(errors.address)}
        helperText={errors.address ? "You should enter your Address" : null}
        {...register("address", { required: true })}
      />

      <Stack
        direction={'row'}
        gap={2}
      >
        <TextField
          type='number'
          id="Age"
          label="Age"
          error={Boolean(errors.age)}
          helperText={errors.age ? "You should enter your Address" : null}
          {...register("age", { min: 12, max: 99 })}
        />

        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          sx={{
            width: "6rem"
          }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" type='submit' sx={{ width: "22rem", height: "3rem", display: "flex", ml: "25rem", alignItems: "center" }}><Typography sx={{ fontSize: "1.3rem" }}>submit</Typography></Button>

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            Account was created
          </Alert>
        </Snackbar>
      </Stack>

    </Box>
  );
}