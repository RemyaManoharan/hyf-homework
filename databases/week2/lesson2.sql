--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT * FROM user;
SELECT task.title,task.id,user.email
FROM task
INNER JOIN user_task ON task.id = user_task.task_id
INNER JOIN user ON user_task.user_id = user.id
WHERE user.email LIKE '%@spotify.com%';
--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.id,task.title
FROM task
INNER JOIN status ON
task.status_id = status.id
INNER JOIN user_task ON 
task.id =user_task.task_id
INNER JOIN user ON
user_task.user_id = user.id
WHERE status.name = 'Done' && user.name LIKE '%DONALD DUCK%'; 
--Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT 	user.name, task.title, task.created 
FROM user_task
INNER JOIN task ON task.id = user_task.task_id
INNER JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows' AND MONTH(created) = 09;
--Find how many tasks where created in each month,
SELECT MONTH(created) AS Month , count(*) AS tasks
FROM task
GROUP BY MONTH(created);
