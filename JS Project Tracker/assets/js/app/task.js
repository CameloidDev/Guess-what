TaskSystem = {

}

TaskSystem.Task = function (name, priority, assignee) {
	var name = name;
	var priority = priority;
	var assignee = assignee;
	var description = "";
	var parentTask = this;
	var subtasks = [];
	var eventLog = [];

	// variable getters
	function Name () { return name; }
	function Priority () { return priority; }
	function Assignee () { return assignee; }
	function Description () { return description; }
	function ParentTask () { return parentTask; }
	function Subtasks () { return subtasks; }
	function EventLog () { return eventLog; }

	// variable setters
	this.SetName = function (newName) { name = newName; }
	this.SetAssignee = function (newAssignee) {
		// validate assignee beforehand
		assignee = newAssignee;
	}
	this.SetDescription = function (newDescription) { description = newDescription;	}

	// a reference to this object for use within functions
	var THIS = this;

	// public class functions

	// priority levels: 1 = low, 2 = medium, 3 = high
	this.SetPriority = function (newPriorityLevel) {
		if (newPriorityLevel == 1 || newPriorityLevel == 2 || newPriorityLevel == 3) {
			priority = newPriorityLevel;
		}
		else {
			console.log("Passed priority level is outside of range. Allowed priority levels:\n" + 
				"1 = low priority\n2 = medium priority\n3 = high priority");
		}
	}

	this.AddSubtask = function (newSubtask) {
		if (TaskSystem.ValidateTask(newSubtask) == false) {
			return;
		}

		// check if the passed task is already a subtask of this task
		if (subtasks.find(newSubtask) == undefined) {
			// handle subtask registration process
			newSubtask.ReassignParent();
			subtasks.push(newSubtask);
		}
		else {
			console.log("Passed task is already a subtask of this task");
		}
	}

	this.RemoveSubtask = function (oldSubtask) {
		if (TaskSystem.ValidateTask(oldSubtask) == false) {
			return;
		}

		var index = subtasks.IndexOf(oldSubtask);
		
		if (index > -1) {
			oldSubtask.ReassignParent(undefined);
			subtasks.splice(index, 1);
		}
		else {
			// as these functions call eachother, currently there's a bug that will display this message everytime
			console.log("Passed task is not a subtask of this task");
		}
	}

	// to remove the parent, pass this task to the function aka. assign this task to be its own parent
	this.ReassignParent = function (newParentTask) {
		if (TaskSystem.ValidateTask(newParentTask) == false ) {
			return;
		}

		if (parentTask != THIS && parentTask.Subtasks.find(THIS)) {
			parentTask.RemoveSubtask (THIS);
		}

		parentTask = newParentTask;
	}

	// add event handling and submissions to eventLog

	return {
		name : Name,
		priority : Priority,
		assignee : Assignee,
		description : Description,
		parentTask : ParentTask,
		subtasks : Subtasks,
		eventLog : EventLog
	}
}

TaskSystem.Task.prototype = Object.create();
TaskSystem.Task.prototype.constructor = TaskSystem.Task;

TaskSystem.ValidateTask = function (task) {
	// add a check to see if the passed task is a TaskSystem.Task
	if (task == undefined) {
		console.log("Passed task is undefined");
		return false;
	}
	if (task == null) {
		console.log("Passed task is null");
		return false;
	}
	if (!(task instanceof TaskSystem.Task)) {
		console.log("Passed task is not an instance of TaskSystem.Task");
		return false;
	}
	return true;
}

