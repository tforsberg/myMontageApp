montageDefine("42c3608","ui/video.reel/video.html",{text:'<!DOCTYPE html><html><head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=video.css>\n    <link rel=stylesheet href=icons/style.css>\n    \n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"video"},"mediaElement":{"#":"mediaElement"}}},"control":{"prototype":"ui/video-control.reel","properties":{"element":{"#":"control"},"video":{"@":"owner"}},"bindings":{"videoController":{"<-":"@owner.videoController"}}},"play":{"prototype":"ui/button.reel","properties":{"element":{"#":"play"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]}}</script>\n</head>\n<body>\n\n    <div data-montage-id=video class="digit-Video digit-Video--firstPlay">\n        <video data-montage-id=mediaElement class=digit-Video-frame>\n        </video>\n        <div class=digit-Video-cover>\n            <button data-montage-id=play class=digit-Video-cover-button></button>\n        </div>\n        <menu data-montage-id=control>\n        </menu>\n    </div>\n\n\n\n</body></html>'});