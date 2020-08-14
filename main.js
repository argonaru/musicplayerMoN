Game.onload = function(){
	let s_screen = new Screen("music_player_screen", "100%", "100%", true, false);
	Game.screen.add(s_screen);
	let Style_0 = new CssStyle("youtube_music_player", "id", [
		{"property" : "pointer-events", "value" : "auto"}
	]);
	let Style_1 = new CssStyle("music_playlist_field", "id", [
		{"property" : "pointer-events", "value" : "auto"},
		{"property" : "position", "value" : "absolute"},
		{"property" : "bottom", "value" : "10px"},
		{"property" : "left", "value" : "10px"}
	]);
	let Style_2 = new CssStyle("youtube_music_player #gaf210codes_IriQ0_container div", "id", [
		{"property" : "overflow", "value" : "hidden"}
	]);
	let Style_3 = new CssStyle("youtube_music_player #gaf210codes_IriQ0_container .close_button", "id", [
		{"property" : "width", "value" : "25px"},
		{"property" : "border", "value" : "0"}
	]);
	let Style_4 = new CssStyle("youtube_music_player #gaf210codes_IriQ0_container .abc_container input", "id", [
		{"property" : "height", "value" : "20px"},
		{"property" : "margin", "value" : "auto"},
		{"property" : "font-size", "value" : "14px"},
		{"property" : "font-family", "value" : "sans-serif"},
		{"property" : "margin-left", "value" : "5px"}
	]);
	let Style_5 = new CssStyle("youtube_music_player #gaf210codes_IriQ0_container .abc_container button", "id", [
		{"property" : "height", "value" : "20px"},
		{"property" : "margin", "value" : "auto"}
	]);
	Game.css.add(Style_0);
	Game.css.add(Style_1);
	Game.css.add(Style_2);
	Game.css.add(Style_3);
	Game.css.add(Style_4);
	Game.css.add(Style_5);

	
/*<style>
.playerbutton{cursor:pointer;border:none;background:transparent;outline:none;display:inline}
.gaf210codes_youtubebox,.preload_box{width:1px;height:1px;overflow:hidden;position:absolute;display:inline}
.gaf210codes_youtubetitle{font-family:Arial;font-size:12px;display:inline-block;vertical-align:top;padding:6px;padding-bottom:0px;}
#gaf210codes_PHxzr_container{text-shadow:1px 1px #ccc;}
</style>
    */  

}

Game.afterdraw = function(){
	//<div id="music_playlist_field"><div><input><button onclick="RunFromGlobal('musicplayer', 'PlaySong', [$(this).prev().val()]);">Text</button></div></div><div></div>`);
	$("div#frame_music_player_screen").html(`<div id="youtube_music_player"></div>`);

	switch(Math.round(Math.random() * 6)){
		case 0:
			Game.functions.PlaySong('&list=RDOtGreIyxBkk');
		break;

		case 1:
			Game.functions.PlaySong('&list=RDEhy0ZQ6sN0k');
		break;

		case 2:
			Game.functions.PlaySong('&list=RDTEvgkaSmeHA');
		break;

		case 3:
			Game.functions.PlaySong('&list=RDsi81bIoZRJQ');
		break;

		case 4:
			Game.functions.PlaySong('&list=RDPa_s7ogtokM');
		break;

		case 5:
			Game.functions.PlaySong('&list=RDQI09tWPyWtI');
		break;

		default:
			Game.functions.PlaySong('&list=RDjAc3L2NQbA8');
		break;
	}

}

Game.functions = {
	PlaySong : function(url){



		let playlist_key = url.match(/&list=([^&]+)&?/);
		let video_key = url.match(/v=([^&\s]+)/);
		if(playlist_key || video_key){
			$("#youtube_music_player").html(`<style>.playerbutton{cursor:pointer;border:none;background:transparent;outline:none;display:inline}.gaf210codes_youtubebox,.preload_box{width:1px;height:1px;overflow:hidden;position:absolute;display:inline}.gaf210codes_youtubetitle{min-width:150px;max-width:350px;font-family:Arial;font-size:12px;display:inline-block;vertical-align:top;padding:6px;padding-bottom:0px;}#gaf210codes_IriQ0_container{position:fixed;z-index:9999999;box-shadow:0px 0px 10px 0px #333;bottom:0px;right:5px;background:rgba(0,0,0,0.7);text-shadow:1px 1px #000;color:#fff;display: flex;}</style>
			<script src="https://www.youtube.com/player_api"></script>
			<script>function toggleButtonPlayer_IriQ0(buttonobj){buttonobj.style.display="none";if(buttonobj.id=="gaf210codes-IriQ0-playbutton"){document.getElementById("gaf210codes-IriQ0-pausebutton").style.display="inline";}else{document.getElementById("gaf210codes-IriQ0-playbutton").style.display="inline";}}</script>
			<div id="gaf210codes_IriQ0_container"><div class="gaf210codes_youtubebox"><iframe allow="autoplay" width="250" height="250" src="https://www.youtube.com/embed/`
			+function(){
				let return_text = ""
				if(video_key){
					return_text+= video_key[1];
				}
				if(playlist_key){
					return_text+= `?list=${playlist_key[1]}&amp;index=0&amp;listType=playlist&amp;loop=1&amp;`
				}else{
					return_text+= `?loop=0&amp;`
				}
				return_text+= `enablejsapi=1&amp;fs=0&amp;rel=0&amp;showinfo=0&amp;modestbranding=1&amp;iv_load_policy=3&amp;controls=0&amp;autoplay=0"`
				return return_text;
			}()+
			`enablejsapi=1&amp;fs=0&amp;rel=0&amp;showinfo=0&amp;modestbranding=1&amp;iv_load_policy=3&amp;controls=0&amp;autoplay=0" onload="gaf210codes_IriQ0=new YT.Player(this,{events:{'onStateChange':function(event){if(event.data == 1){document.getElementById('gaf210codes_IriQ0_title').innerHTML=event.target.getVideoData().title;toggleButtonPlayer_IriQ0(document.getElementById('gaf210codes-IriQ0-playbutton'))}}}})"></iframe></div>
			<button type="button" class="playerbutton" id="gaf210codes-IriQ0-playbutton" onclick="gaf210codes_IriQ0.playVideo();toggleButtonPlayer_IriQ0(this)"><img src="../../../plugins/musicplayer/assets/play.png"></button><button type="button" class="playerbutton" id="gaf210codes-IriQ0-pausebutton" onclick="gaf210codes_IriQ0.pauseVideo();toggleButtonPlayer_IriQ0(this)" style="display:none"><img src="../../../plugins/musicplayer/assets/pause.png"></button><div class="preload_box"><img src="../../../plugins/musicplayer/assets/play.png"><img src="../../../plugins/musicplayer/assets/pause.png"></div><input style="outline:none; margin-right:5px;" type="range" min="0" max="100" onchange="gaf210codes_IriQ0.setVolume(this.value)"><marquee id="gaf210codes_IriQ0_title" class="gaf210codes_youtubetitle"></marquee></div>`)
			$("#youtube_music_player #gaf210codes_IriQ0_container").prepend(`<div class="abc_container hidden" style="display:flex;"><input style="width:700px;" placeholder="${url}" value="${url}"><button onclick="RunFromGlobal('musicplayer', 'PlaySong', [$(this).prev().val()]);"></button></div`);
			$("#youtube_music_player #gaf210codes_IriQ0_container").prepend(`<button class="close_button" style="background:url('../../../plugins/musicplayer/assets/out.png');background-size: 100% 100%;" onclick="if($(this).next().hasClass('hidden')){ $(this).next().removeClass('hidden').show(); $(this).css('background','url(../../../plugins/musicplayer/assets/in.png)').css('background-size', '100% 100%'); }else{ $(this).next().addClass('hidden').hide(); $(this).css('background','url(../../../plugins/musicplayer/assets/out.png)').css('background-size', '100% 100%'); }"></button>`);
			$("#youtube_music_player #gaf210codes_IriQ0_container .abc_container").hide();
		}
	}
}

Game.global_vars = {

}

Game.name = "musicplayer";