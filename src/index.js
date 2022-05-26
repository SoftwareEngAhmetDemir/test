
$(document).ready(function () {

    var stepperBtn = $("#nav-tab button");
    let progress = $("#progress");
    let lenofSteps = stepperBtn.length - 1;

    progress.attr("max", `${lenofSteps}`);

    stepperBtn.map((index, e) => {
        $(`#nav-tab button:eq(${index})`).on('click', () => {
            progress.attr("value", `${index}`);
        })
    })
});
