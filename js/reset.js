function resetForm() {
    // Reset marker opacities
    tikkurila.setOpacity(0.0);
    hiekkaharju.setOpacity(0.0);
    koivukyla.setOpacity(0.0);
    rekola.setOpacity(0.0);
    korso.setOpacity(0.0);
    hakunila.setOpacity(0.0);
    kuninkaanmaki.setOpacity(0.0);
    vaarala.setOpacity(0.0);
    leinela.setOpacity(0.0);
    nikinmaki.setOpacity(0.0);
    ilola.setOpacity(0.0);
    aviapolis.setOpacity(0.0);
    tammisto.setOpacity(0.0);
    ruskeasanta.setOpacity(0.0);
    ylasto.setOpacity(0.0);
    martinlaakso.setOpacity(0.0);
    myyrmaki.setOpacity(0.0);
    kivisto.setOpacity(0.0);

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
