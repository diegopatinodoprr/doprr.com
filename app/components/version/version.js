'use strict';

angular.module('doprr.version', [
  'doprr.version.interpolate-filter',
  'doprr.version.version-directive'
])

.value('version', '0.1');
