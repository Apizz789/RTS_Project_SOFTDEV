let V = 5;

function minDistance(dist, visited) 
{
    let min = Number.MAX_VALUE;
    let min_index = -1;

    for (let v = 0; v < V; v++) 
        if (visited[v] == false && dist[v] <= min) 
        {
            min = dist[v];
            min_index = v;
        }
    return min_index;
}

function printSolution(dist, lst) 
{
    document.write("Vertex \t\t Distance from Source<br>");
    for (let i = 0; i < V; i++) 
    {
        document.write(i + " \t\t " + dist[i] + " " + lst[i] + "<br>");
    }
}

function dijkstra(graph, src) 
{
    let dist = new Array(V);
    let visited = new Array(V);

    for (let i = 0; i < V; i++) 
    {
        dist[i] = Number.MAX_VALUE;
        visited[i] = false;
        lst[i] = "\0";
    }

    dist[src] = 0;

    for (let count = 0; count < V - 1; count++) 
    {
        let u = minDistance(dist, visited);
        visited[u] = true;
        for (let v = 0; v < V; v++) 
        {
            if (  !visited[v] 
                && graph[u][v] != 0 
                && dist[u] != Number.MAX_VALUE 
                && dist[u] + graph[u][v] < dist[v]
               ) 
            {
                dist[v] = dist[u] + graph[u][v];
                lst[v] += name1[u];
            }
        }
    }

    printSolution(dist, lst);
}
let name1 = ['a','b','c','d','e'];
let tmp = new Array(V);
let lst = new Array(V);
let graph = [[0, 10, 0, 30, 100],
[10, 0, 50, 0, 0],
[0, 50, 0, 20, 10],
[30, 0, 20, 0, 60],
[100, 0, 10, 60, 0]];
dijkstra(graph, 0);
