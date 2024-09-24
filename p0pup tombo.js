document.addEventListener(&quot;DOMContentLoaded&quot;, function() {
    var buttons = document.querySelectorAll(&#39;.PopupButton&#39;);
    buttons.forEach(function(button) {
        button.addEventListener(&#39;click&#39;, function() {
            var url = this.getAttribute(&#39;data-url&#39;);
            var width = 1080;
            var height = 768;
            var left = (screen.width - width) / 2;
            var top = (screen.height - height) / 2;
            var options = &quot;width=&quot; + width + &quot;,height=&quot; + height + &quot;,left=&quot; + left + &quot;,top=&quot; + top;
            var newWindow = window.open(url, &quot;_blank&quot;, options);
            if (newWindow) {
                newWindow.focus();
            } else {
                alert(&quot;Pembukaan jendela baru diblokir oleh browser. Pastikan popup diizinkan untuk situs ini.&quot;);
            }
        });
    });
});
 

document.addEventListener(&quot;DOMContentLoaded&quot;, function() {
    var buttons = document.querySelectorAll(&#39;.PopupButtonDonet-m&#39;);
    buttons.forEach(function(button) {
        button.addEventListener(&#39;click&#39;, function() {
            var url = this.getAttribute(&#39;data-url&#39;);
            var width = 520;
            var height = 768;
            var left = (screen.width - width) / 2;
            var top = (screen.height - height) / 2;
            var options = &quot;width=&quot; + width + &quot;,height=&quot; + height + &quot;,left=&quot; + left + &quot;,top=&quot; + top;
            var newWindow = window.open(url, &quot;_blank&quot;, options);
            if (newWindow) {
                newWindow.focus();
            } else {
                alert(&quot;Pembukaan jendela baru diblokir oleh browser. Pastikan popup diizinkan untuk situs ini.&quot;);
            }
        });
    });
});


document.addEventListener(&quot;DOMContentLoaded&quot;, function() {
    var buttons = document.querySelectorAll(&#39;.PopupButtonDonet&#39;);
    buttons.forEach(function(button) {
        button.addEventListener(&#39;click&#39;, function() {
            var url = this.getAttribute(&#39;data-url&#39;);
            var width = 520;
            var height = 768;
            var left = (screen.width - width) / 2;
            var top = (screen.height - height) / 2;
            var options = &quot;width=&quot; + width + &quot;,height=&quot; + height + &quot;,left=&quot; + left + &quot;,top=&quot; + top;
            var newWindow = window.open(url, &quot;_blank&quot;, options);
            if (newWindow) {
                newWindow.focus();
            } else {
                alert(&quot;Pembukaan jendela baru diblokir oleh browser. Pastikan popup diizinkan untuk situs ini.&quot;);
            }
        });
    });
});

