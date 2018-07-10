videojs.registerPlugin('copyUrlAtTime', function() {
    var URLresult;
    var ob = {"label":"Copy Video URL at Current Time", "listener": function() {
                                                                            var tempInput = document.createElement("input");
                                                                            tempInput.style = "position: absolute; left: -1000px; top: -1000px";
                                                                            tempInput.value = URLresult;
                                                                            document.body.appendChild(tempInput);
                                                                            tempInput.select();
                                                                            document.execCommand("copy");
                                                                            document.body.removeChild(tempInput);
                                                                        }}
    this.contextmenuUI.content.push(ob);
    this.on('contextmenu', function() {
        URLresult = window.location.href.split("?")[0] + "?t="+ Math.floor(this.currentTime());
    });
});