/*:
 *
 *@plugindesc DiceRoll: a plugin to simulate dice rolls. :)
 *
 *@author Andreu Sacasas
 *
 *@help
 *
 * Just call "DiceRoll n1 n2 n3", where n1 is the number of times you want
 * to throw the dice, n2 the faces of the dice and n3 the variable where
 * the result will be inputed in game.
 *
 * With "DiceRollWithAttack n1 n2 n3 n4", n1 is the throw, n2 the dice,
 * n3 the final dice that will be thrown X times (X being "n1"d"n2"), and
 * n4 the variable used.
 */

(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);

    if(command == "DiceRoll")
    {
        var number_faces = Number(args[1]);
        var number_throws = Number(args[0]); 
        var x = 0;

        for (var i = 0; i < number_throws; i++)
        {
            x += Math.round(Math.random() * (number_faces - 1)) + 1;
        }

        $gameVariables.setValue(Number(args[2]), x);
    }
    if(command == "SpikedTrap")
    {
        var damage = 0;
	var number_spikes = 2;
	var melee_damage = 10

        for (var i = 0; i < 1; i++)
        {
            damage += Math.round(Math.random() * (6 - 1)) + 1;
        }

        number_spikes += Math.round(Math.random() * (4 - 1)) + 1;

	damage += number_spikes * ((Math.round(Math.random() * (4 - 1)) + 1) + 2 + melee_damage);

        $gameVariables.setValue(Number(args[0]), damage);
    }
    if(command == "DiceRollWithAttack")
    {
	var number_faces = Number(args[1]);
        var number_throws = Number(args[0]);
	var number_faces_final = Number(args[2]);
        var temp = 0;
	var x = 0;

        for (var i = 0; i < number_throws; i++)
        {
            temp += Math.round(Math.random() * (number_faces - 1)) + 1;
        }

	for (var j = 0; j < temp; j++)
        {
            x += Math.round(Math.random() * (number_faces_final - 1)) + 1;
        }

        $gameVariables.setValue(Number(args[3]), x);
    }
};


})();