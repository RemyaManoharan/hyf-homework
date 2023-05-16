SELECT count(id) FROM status;

SELECT count(id) FROM task where due_date is null or 
 STR_TO_DATE(due_date, '%Y-%m-%d %H:%i:%s') IS NULL;

SELECT *
FROM task
INNER JOIN status ON task.status_id = status.id
WHERE status.name = 'Done';

SELECT *
FROM task
INNER JOIN status ON task.status_id = status.id
WHERE status.name != 'Done';

SELECT * FROM task ORDER BY created DESC;

SELECT * FROM TASK ORDER BY created DESC LIMIT 1;

SELECT title,due_date
FROM task 
 WHERE title LIKE '%database%' OR
 description LIKE '%database%' ;
 
 SELECT task.title, status.name
 FROM task
 JOIN status ON task.status_id = status.id;

SELECT status.name, COUNT(*) AS task_count
FROM task
INNER JOIN status ON task.status_id = status.id
GROUP BY status.name;

SELECT status.name, COUNT(*) AS task_count
FROM task
INNER JOIN status ON task.status_id = status.id
GROUP BY status.name
ORDER BY task_count DESC;
