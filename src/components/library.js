import silverBox from "../library/silverBox.min";

let alertBox = true;

if (alertBox) {
  alertBox = silverBox({
    position: "top-right",
    alertIcon: "success",
    text: "Your data has been saved!",
    centerContent: true,
    showCloseButton: true,
  });
} else {
  // Disable alertBox
  alertBox = null;
}

export default alertBox;
