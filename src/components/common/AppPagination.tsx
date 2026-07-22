import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function AppPagination({ page, totalPages, onPageChange }: PaginationProps) {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </Stack>
  );
}

export default AppPagination;
