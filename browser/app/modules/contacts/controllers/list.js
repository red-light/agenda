(function(angular, undefined) {
  'use strict';

  /**
   * Get the contacts module
   *
   * @api public
   */

  angular
    .module('agenda.modules.contacts')
    .controller('ContactsListController', ContactsListController);

  /**
   * @ngInject
   * @api public
   */

  function ContactsListController($log, contactsService) {
    var vm = this;
    var Contact = contactsService;

    vm.contacts = [];

    vm.init = init;
    vm.remove = remove;

    vm.init();

    function init() {
      Contact
        .retrieve()
        .then(function(res) {
          vm.contacts = res.data;
        });
    }

    function remove(id) {
      Contact
        .remove(id)
        .then(function(res) {
          $log.info(res);
        })
        .catch(function(res) {
          $log.info(res);
        });
    }
  }


})(angular);
