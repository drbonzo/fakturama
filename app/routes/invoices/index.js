import Invoice from "fakturama/models/invoice";

var InvoicesIndexRoute = Ember.Route.extend({
    model: function () {
        return Invoice.fetch();
    }
});

export default InvoicesIndexRoute;
