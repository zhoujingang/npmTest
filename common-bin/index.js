const Command = require('common-bin');
const pkg = require('./package.json');
 const path = require('path');
class MainCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: my-git <command> [options]';
    this.load(path.join(__dirname, 'cmd'));
    this.yargs.alias('V', 'version');
  }
}
 
module.exports = MainCommand;
new MainCommand().start();
