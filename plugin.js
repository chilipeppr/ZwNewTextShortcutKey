// New Text Button Shortcut Key
// This plugin simply attaches a shortcut key to the New Text Button

// Register
var myPlugin = {

    // The ID should be camel case, prefixed with your company name/initials, and be a short
    // name for this plugin. It gets pre-pended to a lot of HTML element class names, CSS styles,
    // data attributes, etc. throughout the Zipwhip app. So this name is important.
    // Example: AuthviaPayments, ZwSuggReply, ZwSentiment, ZwNpsSurvey, SenseforthCreditUnion
    id: "ZwNewTextShortcutKey", // This gets prepended to all CSS styles and class names so not to clobber other plugins

    settings: {
        name: "New Text Button Shortcut Key",
        description: "Attach shortcut key Alt+T to New Text button.",
    },

    // This is the boot code for a plugin. You should call it once you register the plugin.
    // This is the only code that is automatically called by Zipwhip on load of a plugin.
    // For all other events you must register for them in your onLoad event.
    // The onLoad method in your plugin object is called ONCE and only ONCE.
    // RESERVED NAME
    onLoad: function() {

        // Bind shortcut key for Alt+T
        this.bindShortcutKey();

    },

    // Bind shortcut key global event to browser window
    bindShortcutKey: function() {

        $(document).keydown(this.onShortcutKey.bind(this));
            
    },

    // Detect Alt+H on PC / Option+H on Mac shortcut key 
    onShortcutKey: function(evt) {

        console.log("onShortcutKey. evt.ctrlKey:", evt.ctrlKey, "evt.altKey:", evt.altKey, "evt.which:", evt.which, "evt:", evt);

        if (evt.altKey && evt.which == 72) {
            console.log("Shortcut key Alt+T hit for New Text");
            var that = this;
            setTimeout(function() {
                that.onClickNewTextBtn();
            }, 50);
        }

    },

    onClickNewTextBtn: function(evt) {
        console.log("onClickNewTextBtn. evt:", evt);

        $('button.conversation-list-panel_newMessage').trigger("click");

    },

};

// Register
zw.plugin.register(myPlugin);

// Now load it
myPlugin.onLoad();