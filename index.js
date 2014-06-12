console.log("main execution:\n",module.paths);

require('submodule');

module.paths.unshift(__dirname+'/lib');

console.log("modified:\n",module.paths);

require('libmodule');
