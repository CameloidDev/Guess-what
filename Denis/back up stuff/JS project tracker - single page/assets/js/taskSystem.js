
// declare the namespace
// this is just an empty object
window.TaskSystem = window.TaskSystem || { }

// define a Database function of UserSystem
// we'll make it into a class
TaskSystem.Task = function (name, priority, assignee) {

	// name of the task
	var name = name;
	// priority levels: 1 = low, 2 = medium, 3 = high
	var priority = priority;
	// the user assigned to this task
	var assignee = assignee;
	// task description
	var description = "";
	// which task has this task as a subtask
	var parentTask = this;
	// which tasks have this task as a parent
	var subtasks = [];
	// was this task deleted at some point
	var deleted = false;

	// variable getters
	function Name () { return name; }
	function Priority () { return priority; }
	function Assignee () { return assignee; }
	function Description () { return description; }
	function ParentTask () { return parentTask; }
	function Subtasks () { return subtasks; }

	// variable setters
	this.SetName = function (newName) { name = newName; }
	this.SetAssignee = function (newAssignee) {
		// validate assignee beforehand
		assignee = newAssignee;
	}
	this.SetDescription = function (newDescription) { description = newDescription;	}

	// a reference to this object for use within functions
	//var THIS = this;

	// public functions

	// set the priority of this task
	this.SetPriority = function (newPriorityLevel) {
		// if newPriorityLevel is "1", "2" or "3" set priority
		if (newPriorityLevel == 1 || newPriorityLevel == 2 || newPriorityLevel == 3) {
			priority = newPriorityLevel;
		}
		// otherwise log an error
		else {
			console.log("ERROR: Passed priority level is outside of range. Allowed priority levels:\n" + 
				"1 = low priority\n2 = medium priority\n3 = high priority");
		}
	}

	// add a subtask
	this.AddSubtask = function (newSubtask) {
		// exit function if the passed task doesn't pass rudimentary checks
		if (TaskSystem.ValidateTask(newSubtask) == false) {
			return;
		}

		// check if the passed task is already a subtask of this task
		if (subtasks.find(newSubtask) == undefined) {
			// handle subtask registration process
			newSubtask.ReassignParent();
			subtasks.push(newSubtask);
		}
		// otherwise log a message
		else {
			console.log("Passed task is already a subtask of this task");
		}
	}

	// remove a task from subtasks
	this.RemoveSubtask = function (oldSubtask) {
		// exit function if the passed task doesn't pass rudimentary checks
		if (TaskSystem.ValidateTask(oldSubtask) == false) {
			return;
		}

		// get the index of oldSubtask in subtasks
		var index = subtasks.IndexOf(oldSubtask);
		
		// if oldSubtask's index is found...
		if (index > -1) {
			// ...remove its parent...
			oldSubtask.ReassignParent(oldSubtask);
			// ... and remove oldSubtask from subtasks
			subtasks.splice(index, 1);
		}
		// otherwise log a message
		else {
			// as these functions call eachother, currently there's a bug that will display this message everytime
			console.log("Passed task is not a subtask of this task");
		}
	}

	// to remove the parent, pass this task to the function aka. assign this task to be its own parent
	this.ReassignParent = function (newParentTask) {
		// exit function if the passed task doesn't pass rudimentary checks
		if (TaskSystem.ValidateTask(newParentTask) == false ) {
			return;
		}

		// if this and parentTask aren't the same task and
		// newParentTask isn't a subtask of this task...
		if (parentTask != this &&
			subtasks.IndexOf(newParentTask) == -1) {
			// ... remove this task from parentTask
			parentTask.RemoveSubtask (this);
		}

		// assign newParentTask to this task
		parentTask = newParentTask;
	}

	// delete the task
	this.Delete = function () {
		// if subtasks is empty
		if (subtasks.length > 0) {
			// TODO: prompt to first remove all subtasks
			// otherwise it might be confusing to users
			alert("Remove all subtasks first");
			return;
		}
		// set delete to true
		deleted = true;
	}

	// honestly... I have no idea why this is here :P
	this.InspectDeleted = function () {
		return {
			name : Name,
			priority : Priority,
			assignee : Assignee,
			description : Description,
			parentTask : ParentTask,
			subtasks : Subtasks
		}
	}
}

// set the prototype of the object to Object.prototype
TaskSystem.Task.prototype = Object.create();
// set the Database constructor to be the Database function
// this introduces more of class functionality to Database
TaskSystem.Task.prototype.constructor = TaskSystem.Task;

// check if task passes rudimentary checks
TaskSystem.ValidateTask = function (task) {
	// check if task is of unknown value
	if (task == undefined) {
		console.log("Passed task is undefined");
		return false;
	}
	// check if it is non-existant
	if (task == null) {
		console.log("Passed task is null");
		return false;
	}
	// check if it is indeed a task
	if (!(task instanceof TaskSystem.Task)) {
		console.log("Passed task is not an instance of TaskSystem.Task");
		return false;
	}
	// return true if roof still isn't on fire
	return true;
}

