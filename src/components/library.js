import silverBox from "../library/silverBox.min";

let alertBox;

const alert = false;

if (alert) {
  alertBox = silverBox({
    position: "top-right",
    alertIcon: "info",
    text: "changes has been saved!",
    centerContent: true,
    showCloseButton: true,
  });
} else {
  // Disable alertBox
  alertBox = null;
}

export default alertBox;
