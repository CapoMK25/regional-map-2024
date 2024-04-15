function resetForm() {
    // Reset marker opacities
    helsinkis.setOpacity(0.0);
    helsinkice.setOpacity(0.0);
    helsinkiwe.setOpacity(0.0);
    helsinkin.setOpacity(0.0);
    helsinkine.setOpacity(0.0);
    helsinkise.setOpacity(0.0);
    helsinkie.setOpacity(0.0);
    oster.setOpacity(0.0);

    // Reset the output message
    document.getElementById("output").innerHTML = "";

    // Reset radio buttons
    const form = document.getElementById("form");
    for (var i = 0; i < form.length; i++) {
        form[i].checked = false;
    }

    // Reset the Google Hybrid layer opacity
    layer_GoogleHybrid_0.setOpacity(1.0);
}
