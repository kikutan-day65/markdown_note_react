import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

type AppButtonProps = {
  label: string;
  onClickHandler: () => void;
};

function AppButton({ label, onClickHandler }: AppButtonProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onClickHandler}>
        {label}
      </Button>
    </Stack>
  );
}

export default AppButton;
