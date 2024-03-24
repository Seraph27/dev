type CodeForcesData = {
  id: string
  solved: boolean
  date: string
  difficulty: number
  problems: string
  url: string
  resources: string
}

const codeforcesData: CodeForcesData[] = [
  {
    id: '0000023',
    solved: false,
    date: '2024/3/23',
    difficulty: 944,
    problems: 'Square Pair',
    url: 'https://atcoder.jp/contests/abc342/tasks/abc342_d',
    resources: 'AtCoder',
  },
  {
    id: '0000022',
    solved: true,
    date: '2024/3/23',
    difficulty: 845,
    problems: 'D - Gomamayo Sequence',
    url: 'https://atcoder.jp/contests/abc346/tasks/abc346_d',
    resources: 'AtCoder',
  },
  {
    id: '0000021',
    solved: true,
    date: '2024/3/22',
    difficulty: 422,
    problems: 'Diversity of Scores',
    url: 'https://atcoder.jp/contests/abc343/tasks/abc343_d',
    resources: 'AtCoder',
  },
  {
    id: '0000020',
    solved: true,
    date: '2024/3/21',
    difficulty: 1645,
    problems: '#(subset sum = K) with Add and Erase',
    url: 'https://atcoder.jp/contests/abc321/tasks/abc321_f',
    resources: 'AtCoder',
  },
  {
    id: '0000019',
    solved: true,
    date: '2024/3/20',
    difficulty: 854,
    problems: 'String Bags',
    url: 'https://atcoder.jp/contests/abc344/tasks/abc344_d',
    resources: 'AtCoder',
  },
  {
    id: '0000018',
    solved: true,
    date: '2024/3/17',
    difficulty: 0,
    problems: 'Subsequences Summing to Sevens',
    url: 'https://usaco.org/index.php?page=viewproblem2&cpid=595',
    resources: 'USACO',
  },
  {
    id: '0000017',
    solved: true,
    date: '2024/3/15',
    difficulty: 0,
    problems: 'Top K Frequent Elements',
    url: 'https://leetcode.com/problems/top-k-frequent-elements/description/',
    resources: 'Leetcode',
  },
  {
    id: '0000016',
    solved: true,
    date: '2024/3/14',
    difficulty: 0,
    problems: 'Longest Increasing Subsequence',
    url: 'https://leetcode.com/problems/longest-increasing-subsequence/description/',
    resources: 'Leetcode',
  },
  {
    id: '0000015',
    solved: true,
    date: '2024/3/13',
    difficulty: 1700,
    problems: 'Checkposts (427C)',
    url: 'https://codeforces.com/contest/427/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000014',
    solved: true,
    date: '2024/3/12',
    difficulty: 0,
    problems: 'Longest Cycle in a Graph',
    url: 'https://leetcode.com/problems/longest-cycle-in-a-graph/description/',
    resources: 'Leetcode',
  },
  {
    id: '0000013',
    solved: true,
    date: '2024/3/12',
    difficulty: 0,
    problems: 'Book Shop',
    url: 'https://cses.fi/problemset/task/1158',
    resources: 'CSES',
  },
  {
    id: '0000012',
    solved: true,
    date: '2024/3/11',
    difficulty: 0,
    problems: 'Removing Digits',
    url: 'https://cses.fi/problemset/task/1637',
    resources: 'CSES',
  },
  {
    id: '0000011',
    solved: true,
    date: '2024/3/11',
    difficulty: 0,
    problems: 'Grid Paths',
    url: 'https://cses.fi/problemset/task/1638',
    resources: 'CSES',
  },
  {
    id: '0000010',
    solved: true,
    date: '2024/3/9',
    difficulty: 0,
    problems: 'Coin Combinations II',
    url: 'https://cses.fi/problemset/task/1636',
    resources: 'CSES',
  },
  {
    id: '0000009',
    solved: true,
    date: '2024/3/8',
    difficulty: 1400,
    problems: 'Torn Lucky Ticket (1895B)',
    url: 'https://codeforces.com/contest/1895/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000008',
    solved: true,
    date: '2024/3/6',
    difficulty: 1400,
    problems: 'Add, Divide and Floor (1901C)',
    url: 'https://codeforces.com/contest/1901/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000007',
    solved: true,
    date: '2024/3/5',
    difficulty: 1300,
    problems: 'Insert and Equalize (1902C)',
    url: 'https://codeforces.com/contest/1902/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000006',
    solved: true,
    date: '2024/3/4',
    difficulty: 1300,
    problems: 'Closest Cities (1922C)',
    url: 'https://codeforces.com/contest/1922/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000005',
    solved: true,
    date: '2024/3/4',
    difficulty: 1300,
    problems: 'Game with Multiset (1913C)',
    url: 'https://codeforces.com/contest/1913/problem/C',
    resources: 'Codeforces',
  },
  {
    id: '0000004',
    solved: true,
    date: '2024/3/2',
    difficulty: 1200,
    problems: 'Forming Triangles (1922B)',
    url: 'https://codeforces.com/contest/1922/problem/B',
    resources: 'Codeforces',
  },
  {
    id: '0000003',
    solved: false,
    date: '2024/3/1',
    difficulty: 1600,
    problems: 'Pho Restaurant (1938H)',
    url: 'https://codeforces.com/problemset/problem/1938/H',
    resources: 'Codeforces',
  },
  {
    id: '0000002',
    solved: true,
    date: '2024/2/29',
    difficulty: 0,
    problems: 'Movie Festival II',
    url: 'https://cses.fi/problemset/task/1632',
    resources: 'CSES',
  },
  {
    id: '0000001',
    solved: true,
    date: '2024/2/29',
    difficulty: 0,
    problems: 'Even Odd Tree (LC 1609)',
    url: 'https://leetcode.com/problems/even-odd-tree/description/',
    resources: 'Leetcode',
  },
]

export default codeforcesData
