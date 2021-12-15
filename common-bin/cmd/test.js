const Command = require('common-bin');
class TestCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
 
    this.options = {
      depth: {
        type: 'number',
        description: 'Create a shallow clone with a history truncated to the specified number of commits',
      },
    };
  }
 
  * run({ argv }) {
    console.log('This is test');
  }
 
  get description() {
    return 'Clone a repository into a new directory';
  }
}
module.exports = TestCommand;