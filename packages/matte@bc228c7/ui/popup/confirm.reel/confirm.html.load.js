montageDefine("bc228c7","ui/popup/confirm.reel/confirm.html",{text:'<!DOCTYPE html><html><head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=confirm.css>\n    <script type=text/montage-serialization>{"dynamictext1":{"prototype":"montage/ui/text.reel","properties":{"element":{"#":"msg"}},"bindings":{"value":{"<-":"@owner.msg"}}},"button1":{"prototype":"ui/button.reel","properties":{"identifier":"Ok","element":{"#":"action-ok"}},"bindings":{"label":{"<-":"@owner.okLabel"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"button2":{"prototype":"ui/button.reel","properties":{"identifier":"Cancel","element":{"#":"action-cancel"}},"bindings":{"label":{"<-":"@owner.cancelLabel"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"owner":{"prototype":"ui/popup/confirm.reel","properties":{"element":{"#":"confirm-container"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=confirm-container class=matte-Confirm-dialog>\n        <div class=matte-Popup-header>\n            <h3 data-montage-id=title class=title>Confirmation</h3>\n        </div>\n        <div class=matte-Confirm-content>\n                <div data-montage-id=msg class=msg></div>\n                <div data-montage-id=msg-detail class=msg-detail></div>\n        </div>\n        <div class=matte-Popup-footer>\n            <div class=matte-Confirm-actions>\n                <button class=cancel data-montage-id=action-cancel>Cancel</button>\n                <button class=submit data-montage-id=action-ok>OK</button>\n            </div>\n            <div class=clearfix></div>\n        </div>\n    </div>\n\n\n</body></html>'});