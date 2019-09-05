var RestCruds = function (name, success, error) {
    this.name = name;
    this.success = success;
    this.error = error;

    this.create = function (data) {
        restSubmit(this.name, 'GET', data, this.error, this.success);
    }
    this.read = function (id) {
        var data = {'id': id};
        restSubmit(this.name, 'GET', data, this.error, this.success);
    }

    this.update = function (id, data) {
        data.id = id;
        restSubmit(this.name, 'PUT', data, this.error, this.success);
    }
    this.delete = function (id) {
        var data = {'id': id};
        restSubmit(this.name, 'DELETE',  data, this.error, this.success);
    }

    this.status = function (id) {
        var data = {'id': id};
        restSubmit(this.name, 'GET', data, this.error, this.success);
    }
};