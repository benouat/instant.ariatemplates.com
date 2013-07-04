ace.define("ace/mode/aria",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/aria_highlight_rules","ace/mode/folding/cstyle"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("../tokenizer").Tokenizer,o=e("./aria_highlight_rules").AriaHighlightRules,u=e("./folding/cstyle").FoldMode,a=function(){var e=new o;this.foldingRules=new u,this.$tokenizer=new s(e.getRules())};r.inherits(a,i),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"}}.call(a.prototype),t.Mode=a}),ace.define("ace/mode/aria_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{token:["text","support.function.tpl"],regex:"(\\{)(Template)\\s*",push:[{include:"#tpl-stuff"},{token:["support.function.tpl"],regex:"\\{\\/(Template)\\}",next:"pop"},{defaultToken:"source.template.tpl"}]},{ 
            include: '#tpl-stuff' 
      }],"#tpl-basic-keyword":[{token:"storage.tag.tpl",regex:"\\b(data|bind|bindRefreshTo|bindProcessingTo|to|inside|inArray|inView|inSortedView)\\b"}],"#tpl-expression":[{token:"constant.other.tpl",regex:"\\$\\{.*?(\\})(?=[^\\}]*($|\\{|//))"}],"#tpl-fwk-keyword":[{token:"storage.tag.tpl",regex:"\\$\\w+"}],"#tpl-stuff":[{include:"#tpl-basic-keyword"},{include:"#tpl-fwk-keyword"},{include:"#tpl-statement"},{include:"#tpl-widget"},{include:"#tpl-string"},{include:"#tpl-expression"},{include:"#html-tag"},{include:"#tpl-comment"}],"#tpl-statement":[{token:["text","support.function.tpl","text","support.function.tpl","text","text"],regex:"(\\{/?\\s*)(\\w+)(?:(\\s*)(\\w+)(\\([^)]*\\)))?(.*?\\}|$)"}],"#tpl-widget":[{token:["text","support.function.tpl","text","storage.tag.tpl"],regex:"(\\{\\/?\\s*)(\\@\\w+)(\\:)(\\w+)"}],"#tpl-string":[{token:["string.tpl"],regex:'"[^"]+"'}],"#html-tag":[{token:["text","variable.tpl"],regex:"(</?\\s*)(\\w+)\\b"}],"#tpl-comment":[{token:["comment.tpl"],regex:"//.*$"},{token:"comment",regex:"\\/\\*",next:"comment"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"#tpl-stuff"},{token:"comment",regex:".+"}]},this.normalizeRules()};r.inherits(s,i),t.AriaHighlightRules=s}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){var r=e("../../lib/oop"),i=e("../../range").Range,s=e("./fold_mode").FoldMode,o=t.FoldMode=function(){};r.inherits(o,s),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(e,t,n){var r=e.getLine(n),i=r.match(this.foldingStartMarker);if(i){var s=i.index;return i[1]?this.openingBracketBlock(e,i[1],n,s):e.getCommentFoldRange(n,s+i[0].length,1)}if(t!=="markbeginend")return;var i=r.match(this.foldingStopMarker);if(i){var s=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],n,s):e.getCommentFoldRange(n,s,-1)}}}.call(o.prototype)})