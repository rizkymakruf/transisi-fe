let dataRow = 0;
$("#add-input").click(() => {
  dataRow++;
  inputRow(dataRow);
});

var r_text = new Array();
r_text[0] = "Create initial layout for homepage";
r_text[1] = "Fixing icon with transparant background";
r_text[2] = "Discussions regrading workflow improvement";
r_text[3] = "Creating question for app redesign project";
var j = Math.floor(4 * Math.random());
var randomText = r_text[j];

var r_status = new Array();
r_status[0] = "waiting";
r_status[1] = "inprogress";
r_status[2] = "inreview";
r_status[3] = "approved";
var k = Math.floor(4 * Math.random());
var randomStatus = r_status[k];

inputRow = (i) => {
  let tr = `<div class="item">
                <div class="title-list">
                  <label class="check"
                    >${randomText}
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="status-badge" id="${randomStatus}">${
    randomStatus === "waiting"
      ? "Waiting"
      : randomStatus === "inprogress"
      ? "In Progress"
      : randomStatus === "inreview"
      ? "In Review"
      : randomStatus === "approved" && "Approved"
  }</div>
              </div>`;
  $("#list").append(tr);
};
