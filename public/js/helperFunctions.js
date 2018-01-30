Handlebars.registerHelper("ifvalue", function(conditional, options) {
    if (conditional.indexOf(options.hash.equals) >= 0) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});