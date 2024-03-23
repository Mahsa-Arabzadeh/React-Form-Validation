import silverBox from "../library/silverBox.min";

const alertBox = silverBox({
  position: "top-right",
  alertIcon: "info",
  text: "changes has been saved!",
  centerContent: true,
  showCloseButton: true,
});

export default alertBox;
