import FirebaseAdapter from "fakturama/adapters/firebase";

var Client = Ember.Model.extend({
    id: Ember.attr(),
    companyName: Ember.attr(),
    address: Ember.attr(),
    vatin: Ember.attr(),
    contactName: Ember.attr(),
    contactEmail: Ember.attr(),

    gravatarURL: function () {
        return "//www.gravatar.com/avatar/" + window.md5(this.getWithDefault("contactEmail", "")) + "?d=mm";
    }.property("md5_hash"),

    buyer: function () {
        var parts = [this.get("companyName"), this.get("address")];

        if (this.get("vatin")) {
            parts.push("NIP / VATIN: " + this.get("vatin"));
        }

        return parts.join("\n").trim();
    }.property("companyName", "address", "vatin")
});

Client.reopenClass({
    url: "clients",
    adapter: FirebaseAdapter.create(),

    clearCache: function () {
        this._super.apply(this, arguments);
        this._findAllRecordArray = undefined;
    }
});

export default Client;
