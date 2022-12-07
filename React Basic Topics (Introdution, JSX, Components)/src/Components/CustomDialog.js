import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const CustomDialog = (props) => {
  const { open, id, name, age, email, closepopup } = props;

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Student Record</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <span
              style={{ color: "black", fontSize: "20px", marginLeft: "20px" }}
            >
              <p>No#</p>
              <p>{props.id}</p>
            </span>

            <span
              style={{ color: "black", fontSize: "20px", marginLeft: "20px" }}
            >
              <p>Name</p>
              <p>{props.name}</p>
            </span>

            <span
              style={{
                color: "black",
                fontSize: "20px",
                marginLeft: "20px",
              }}
            >
              <p>Age</p>
              <p>{props.age}</p>
            </span>

            <span
              style={{ color: "black", fontSize: "20px", marginLeft: "20px" }}
            >
              <p>Email</p>
              <p>{props.email}</p>
            </span>
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => closepopup()}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
