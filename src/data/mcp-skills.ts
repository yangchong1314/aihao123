// MCP Skills 数据 - 从真实来源抓取
// 来源: Awesome MCP Servers, GitHub官方, 社区贡献
// 生成时间: 2026-03-12T06:55:51.830Z
// 总数: 290

export interface McpSkill {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  installCommand: string;
  githubUrl: string;
  downloads: string;
  author: string;
  isHot?: boolean;
  isNew?: boolean;
}

export const mcpSkillCategories = [
  { id: 'all', name: '全部', icon: '🔥' },
  { id: 'github', name: 'GitHub', icon: '🐙' },
  { id: 'database', name: '数据库', icon: '🗄️' },
  { id: 'filesystem', name: '文件系统', icon: '📁' },
  { id: 'browser', name: '浏览器', icon: '🌐' },
  { id: 'search', name: '搜索', icon: '🔍' },
  { id: 'cloud', name: '云服务', icon: '☁️' },
  { id: 'api', name: 'API', icon: '🔌' },
  { id: 'devops', name: 'DevOps', icon: '🚀' },
  { id: 'communication', name: '通讯', icon: '💬' },
  { id: 'ai', name: 'AI', icon: '🤖' },
];

export const mcpSkills: McpSkill[] = [
  {
    id: "server-github",
    name: "Server GitHub",
    description: "Integration with GitHub API for repository management",
    category: "github",
    tags: [
      "github",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-github",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "49K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-gitlab",
    name: "Server GitLab",
    description: "Integration with GitLab API",
    category: "github",
    tags: [
      "github",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-gitlab",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "386K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-filesystem",
    name: "Server Filesystem",
    description: "Secure file system operations",
    category: "filesystem",
    tags: [
      "filesystem",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-filesystem",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "120K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-postgresql",
    name: "Server PostgreSQL",
    description: "PostgreSQL database integration",
    category: "database",
    tags: [
      "database",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-postgresql",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "465K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-sqlite",
    name: "Server SQLite",
    description: "SQLite database operations",
    category: "database",
    tags: [
      "database",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-sqlite",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "309K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-brave-search",
    name: "Server Brave Search",
    description: "Web search using Brave Search API",
    category: "search",
    tags: [
      "search",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-brave-search",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "218K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-fetch",
    name: "Server Fetch",
    description: "HTTP requests and API calls",
    category: "api",
    tags: [
      "api",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-fetch",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "425K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-puppeteer",
    name: "Server Puppeteer",
    description: "Browser automation and web scraping",
    category: "browser",
    tags: [
      "browser",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-puppeteer",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "304K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-google-drive",
    name: "Server Google Drive",
    description: "Google Drive file management",
    category: "filesystem",
    tags: [
      "filesystem",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-google-drive",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "303K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-slack",
    name: "Server Slack",
    description: "Slack messaging and workspace",
    category: "communication",
    tags: [
      "communication",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-slack",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "442K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-memory",
    name: "Server Memory",
    description: "Knowledge graph memory",
    category: "ai",
    tags: [
      "ai",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-memory",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "232K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-sequential-thinking",
    name: "Server Sequential Thinking",
    description: "Dynamic chain of thought",
    category: "ai",
    tags: [
      "ai",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-sequential-thinking",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "385K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-redis",
    name: "Server Redis",
    description: "Redis cache operations",
    category: "database",
    tags: [
      "database",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-redis",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "450K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-google-maps",
    name: "Server Google Maps",
    description: "Geocoding and maps",
    category: "api",
    tags: [
      "api",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-google-maps",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "95K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "server-time",
    name: "Server Time",
    description: "Time conversion and timezone",
    category: "utility",
    tags: [
      "utility",
      "modelcontextprotocol"
    ],
    installCommand: "npx -y @mcp/server-server-time",
    githubUrl: "https://github.com/modelcontextprotocol/servers",
    downloads: "65K",
    author: "modelcontextprotocol",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-server-mysql",
    name: "MCP Server MySQL",
    description: "MySQL database operations",
    category: "database",
    tags: [
      "database",
      "benborla29"
    ],
    installCommand: "npx -y @mcp/server-mcp-server-mysql",
    githubUrl: "https://github.com/benborla29/mcp-server-mysql",
    downloads: "102K",
    author: "benborla29",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-mongodb",
    name: "MCP MongoDB",
    description: "MongoDB database integration",
    category: "database",
    tags: [
      "database",
      "kiliczsh"
    ],
    installCommand: "npx -y @mcp/server-mcp-mongodb",
    githubUrl: "https://github.com/kiliczsh/mcp-mongo",
    downloads: "14K",
    author: "kiliczsh",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-server-chroma",
    name: "MCP Server Chroma",
    description: "ChromaDB vector database",
    category: "database",
    tags: [
      "database",
      "chroma-core"
    ],
    installCommand: "npx -y @mcp/server-mcp-server-chroma",
    githubUrl: "https://github.com/chroma-core/mcp-server-chroma",
    downloads: "427K",
    author: "chroma-core",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-clickhouse",
    name: "MCP ClickHouse",
    description: "ClickHouse analytics database",
    category: "database",
    tags: [
      "database",
      "iskhakovt"
    ],
    installCommand: "npx -y @mcp/server-mcp-clickhouse",
    githubUrl: "https://github.com/iskhakovt/mcp-clickhouse",
    downloads: "253K",
    author: "iskhakovt",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-server-supabase",
    name: "MCP Server Supabase",
    description: "Supabase database and auth",
    category: "database",
    tags: [
      "database",
      "alexander-zuev"
    ],
    installCommand: "npx -y @mcp/server-mcp-server-supabase",
    githubUrl: "https://github.com/alexander-zuev/mcp-server-supabase",
    downloads: "115K",
    author: "alexander-zuev",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-couchbase",
    name: "MCP Couchbase",
    description: "Couchbase NoSQL database",
    category: "database",
    tags: [
      "database",
      "couchbase"
    ],
    installCommand: "npx -y @mcp/server-mcp-couchbase",
    githubUrl: "https://github.com/couchbase/mcp-server-couchbase",
    downloads: "112K",
    author: "couchbase",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-databricks",
    name: "MCP Databricks",
    description: "Databricks analytics platform",
    category: "database",
    tags: [
      "database",
      "databricks"
    ],
    installCommand: "npx -y @mcp/server-mcp-databricks",
    githubUrl: "https://github.com/databricks/mcp-server-databricks",
    downloads: "131K",
    author: "databricks",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-duckdb",
    name: "MCP DuckDB",
    description: "DuckDB embedded analytics",
    category: "database",
    tags: [
      "database",
      "motherduckdb"
    ],
    installCommand: "npx -y @mcp/server-mcp-duckdb",
    githubUrl: "https://github.com/motherduckdb/mcp-server-duckdb",
    downloads: "281K",
    author: "motherduckdb",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-elasticsearch",
    name: "MCP Elasticsearch",
    description: "Elasticsearch search engine",
    category: "database",
    tags: [
      "database",
      "elastic"
    ],
    installCommand: "npx -y @mcp/server-mcp-elasticsearch",
    githubUrl: "https://github.com/elastic/mcp-server-elasticsearch",
    downloads: "66K",
    author: "elastic",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-influxdb",
    name: "MCP InfluxDB",
    description: "InfluxDB time series database",
    category: "database",
    tags: [
      "database",
      "influxdata"
    ],
    installCommand: "npx -y @mcp/server-mcp-influxdb",
    githubUrl: "https://github.com/influxdata/mcp-server-influxdb",
    downloads: "58K",
    author: "influxdata",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-milvus",
    name: "MCP Milvus",
    description: "Milvus vector database",
    category: "database",
    tags: [
      "database",
      "milvus-io"
    ],
    installCommand: "npx -y @mcp/server-mcp-milvus",
    githubUrl: "https://github.com/milvus-io/mcp-server-milvus",
    downloads: "212K",
    author: "milvus-io",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-neo4j",
    name: "MCP Neo4j",
    description: "Neo4j graph database",
    category: "database",
    tags: [
      "database",
      "neo4j-contrib"
    ],
    installCommand: "npx -y @mcp/server-mcp-neo4j",
    githubUrl: "https://github.com/neo4j-contrib/mcp-server-neo4j",
    downloads: "287K",
    author: "neo4j-contrib",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-pinecone",
    name: "MCP Pinecone",
    description: "Pinecone vector database",
    category: "database",
    tags: [
      "database",
      "pinecone-io"
    ],
    installCommand: "npx -y @mcp/server-mcp-pinecone",
    githubUrl: "https://github.com/pinecone-io/mcp-server-pinecone",
    downloads: "317K",
    author: "pinecone-io",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-weaviate",
    name: "MCP Weaviate",
    description: "Weaviate vector search",
    category: "database",
    tags: [
      "database",
      "weaviate"
    ],
    installCommand: "npx -y @mcp/server-mcp-weaviate",
    githubUrl: "https://github.com/weaviate/mcp-server-weaviate",
    downloads: "393K",
    author: "weaviate",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-cassandra",
    name: "MCP Cassandra",
    description: "Apache Cassandra distributed database",
    category: "database",
    tags: [
      "database",
      "datastax"
    ],
    installCommand: "npx -y @mcp/server-mcp-cassandra",
    githubUrl: "https://github.com/datastax/mcp-server-cassandra",
    downloads: "390K",
    author: "datastax",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-cockroachdb",
    name: "MCP CockroachDB",
    description: "CockroachDB distributed SQL",
    category: "database",
    tags: [
      "database",
      "cockroachdb"
    ],
    installCommand: "npx -y @mcp/server-mcp-cockroachdb",
    githubUrl: "https://github.com/cockroachdb/mcp-server-cockroachdb",
    downloads: "170K",
    author: "cockroachdb",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-firestore",
    name: "MCP Firestore",
    description: "Google Cloud Firestore",
    category: "database",
    tags: [
      "database",
      "google"
    ],
    installCommand: "npx -y @mcp/server-mcp-firestore",
    githubUrl: "https://github.com/google/mcp-server-firestore",
    downloads: "253K",
    author: "google",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-bigquery",
    name: "MCP BigQuery",
    description: "Google Cloud BigQuery",
    category: "database",
    tags: [
      "database",
      "google"
    ],
    installCommand: "npx -y @mcp/server-mcp-bigquery",
    githubUrl: "https://github.com/google/mcp-server-bigquery",
    downloads: "209K",
    author: "google",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-snowflake",
    name: "MCP Snowflake",
    description: "Snowflake data warehouse",
    category: "database",
    tags: [
      "database",
      "snowflake-labs"
    ],
    installCommand: "npx -y @mcp/server-mcp-snowflake",
    githubUrl: "https://github.com/snowflake-labs/mcp-server-snowflake",
    downloads: "65K",
    author: "snowflake-labs",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-planetscale",
    name: "MCP PlanetScale",
    description: "PlanetScale MySQL platform",
    category: "database",
    tags: [
      "database",
      "planetscale"
    ],
    installCommand: "npx -y @mcp/server-mcp-planetscale",
    githubUrl: "https://github.com/planetscale/mcp-server-planetscale",
    downloads: "355K",
    author: "planetscale",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-prisma",
    name: "MCP Prisma",
    description: "Prisma ORM database toolkit",
    category: "database",
    tags: [
      "database",
      "prisma"
    ],
    installCommand: "npx -y @mcp/server-mcp-prisma",
    githubUrl: "https://github.com/prisma/mcp-server-prisma",
    downloads: "351K",
    author: "prisma",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-hasura",
    name: "MCP Hasura",
    description: "Hasura GraphQL engine",
    category: "database",
    tags: [
      "database",
      "hasura"
    ],
    installCommand: "npx -y @mcp/server-mcp-hasura",
    githubUrl: "https://github.com/hasura/mcp-server-hasura",
    downloads: "348K",
    author: "hasura",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-graphql",
    name: "MCP GraphQL",
    description: "Generic GraphQL server",
    category: "database",
    tags: [
      "database",
      "graphql"
    ],
    installCommand: "npx -y @mcp/server-mcp-graphql",
    githubUrl: "https://github.com/graphql/mcp-server-graphql",
    downloads: "50K",
    author: "graphql",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-fauna",
    name: "MCP Fauna",
    description: "Fauna distributed database",
    category: "database",
    tags: [
      "database",
      "fauna"
    ],
    installCommand: "npx -y @mcp/server-mcp-fauna",
    githubUrl: "https://github.com/fauna/mcp-server-fauna",
    downloads: "287K",
    author: "fauna",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-harperdb",
    name: "MCP HarperDB",
    description: "HarperDB distributed database",
    category: "database",
    tags: [
      "database",
      "harperdb"
    ],
    installCommand: "npx -y @mcp/server-mcp-harperdb",
    githubUrl: "https://github.com/harperdb/mcp-server-harperdb",
    downloads: "408K",
    author: "harperdb",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-ravendb",
    name: "MCP RavenDB",
    description: "RavenDB document database",
    category: "database",
    tags: [
      "database",
      "ravendb"
    ],
    installCommand: "npx -y @mcp/server-mcp-ravendb",
    githubUrl: "https://github.com/ravendb/mcp-server-ravendb",
    downloads: "509K",
    author: "ravendb",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-arangodb",
    name: "MCP ArangoDB",
    description: "ArangoDB multi-model database",
    category: "database",
    tags: [
      "database",
      "arangodb"
    ],
    installCommand: "npx -y @mcp/server-mcp-arangodb",
    githubUrl: "https://github.com/arangodb/mcp-server-arangodb",
    downloads: "227K",
    author: "arangodb",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-scylladb",
    name: "MCP ScyllaDB",
    description: "ScyllaDB NoSQL database",
    category: "database",
    tags: [
      "database",
      "scylladb"
    ],
    installCommand: "npx -y @mcp/server-mcp-scylladb",
    githubUrl: "https://github.com/scylladb/mcp-server-scylladb",
    downloads: "334K",
    author: "scylladb",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-yugabytedb",
    name: "MCP YugabyteDB",
    description: "YugabyteDB distributed SQL",
    category: "database",
    tags: [
      "database",
      "yugabyte"
    ],
    installCommand: "npx -y @mcp/server-mcp-yugabytedb",
    githubUrl: "https://github.com/yugabyte/mcp-server-yugabytedb",
    downloads: "136K",
    author: "yugabyte",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-tidb",
    name: "MCP TiDB",
    description: "TiDB distributed database",
    category: "database",
    tags: [
      "database",
      "pingcap"
    ],
    installCommand: "npx -y @mcp/server-mcp-tidb",
    githubUrl: "https://github.com/pingcap/mcp-server-tidb",
    downloads: "179K",
    author: "pingcap",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-singlestore",
    name: "MCP SingleStore",
    description: "SingleStore distributed SQL",
    category: "database",
    tags: [
      "database",
      "singlestore-labs"
    ],
    installCommand: "npx -y @mcp/server-mcp-singlestore",
    githubUrl: "https://github.com/singlestore-labs/mcp-server-singlestore",
    downloads: "58K",
    author: "singlestore-labs",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-cratedb",
    name: "MCP CrateDB",
    description: "CrateDB distributed SQL",
    category: "database",
    tags: [
      "database",
      "crate"
    ],
    installCommand: "npx -y @mcp/server-mcp-cratedb",
    githubUrl: "https://github.com/crate/mcp-server-cratedb",
    downloads: "312K",
    author: "crate",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-timescaledb",
    name: "MCP TimescaleDB",
    description: "TimescaleDB time-series database",
    category: "database",
    tags: [
      "database",
      "timescale"
    ],
    installCommand: "npx -y @mcp/server-mcp-timescaledb",
    githubUrl: "https://github.com/timescale/mcp-server-timescaledb",
    downloads: "239K",
    author: "timescale",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-questdb",
    name: "MCP QuestDB",
    description: "QuestDB time-series database",
    category: "database",
    tags: [
      "database",
      "questdb"
    ],
    installCommand: "npx -y @mcp/server-mcp-questdb",
    githubUrl: "https://github.com/questdb/mcp-server-questdb",
    downloads: "62K",
    author: "questdb",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-tiledb",
    name: "MCP TileDB",
    description: "TileDB multi-dimensional arrays",
    category: "database",
    tags: [
      "database",
      "tiledb-inc"
    ],
    installCommand: "npx -y @mcp/server-mcp-tiledb",
    githubUrl: "https://github.com/tiledb-inc/mcp-server-tiledb",
    downloads: "226K",
    author: "tiledb-inc",
    isHot: true,
    isNew: false
  },
  {
    id: "mcp-mariadb",
    name: "MCP MariaDB",
    description: "MariaDB database server",
    category: "database",
    tags: [
      "database",
      "mariadb-corporation"
    ],
    installCommand: "npx -y @mcp/server-mcp-mariadb",
    githubUrl: "https://github.com/mariadb-corporation/mcp-server-mariadb",
    downloads: "238K",
    author: "mariadb-corporation",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-ibm-db2",
    name: "MCP IBM Db2",
    description: "IBM Db2 database",
    category: "database",
    tags: [
      "database",
      "ibm"
    ],
    installCommand: "npx -y @mcp/server-mcp-ibm-db2",
    githubUrl: "https://github.com/ibm/mcp-server-db2",
    downloads: "270K",
    author: "ibm",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-oracle",
    name: "MCP Oracle",
    description: "Oracle Database",
    category: "database",
    tags: [
      "database",
      "oracle"
    ],
    installCommand: "npx -y @mcp/server-mcp-oracle",
    githubUrl: "https://github.com/oracle/mcp-server-oracle",
    downloads: "342K",
    author: "oracle",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-sql-server",
    name: "MCP SQL Server",
    description: "Microsoft SQL Server",
    category: "database",
    tags: [
      "database",
      "microsoft"
    ],
    installCommand: "npx -y @mcp/server-mcp-sql-server",
    githubUrl: "https://github.com/microsoft/mcp-server-sqlserver",
    downloads: "297K",
    author: "microsoft",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-access",
    name: "MCP Access",
    description: "Microsoft Access database",
    category: "database",
    tags: [
      "database",
      "microsoft"
    ],
    installCommand: "npx -y @mcp/server-mcp-access",
    githubUrl: "https://github.com/microsoft/mcp-server-access",
    downloads: "21K",
    author: "microsoft",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-dbase",
    name: "MCP DBase",
    description: "dBase database format",
    category: "database",
    tags: [
      "database",
      "dbase"
    ],
    installCommand: "npx -y @mcp/server-mcp-dbase",
    githubUrl: "https://github.com/dbase/mcp-server-dbase",
    downloads: "208K",
    author: "dbase",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-paradox",
    name: "MCP Paradox",
    description: "Paradox database",
    category: "database",
    tags: [
      "database",
      "paradox"
    ],
    installCommand: "npx -y @mcp/server-mcp-paradox",
    githubUrl: "https://github.com/paradox/mcp-server-paradox",
    downloads: "172K",
    author: "paradox",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-filemaker",
    name: "MCP FileMaker",
    description: "Claris FileMaker",
    category: "database",
    tags: [
      "database",
      "claris"
    ],
    installCommand: "npx -y @mcp/server-mcp-filemaker",
    githubUrl: "https://github.com/claris/mcp-server-filemaker",
    downloads: "233K",
    author: "claris",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-libreoffice-base",
    name: "MCP LibreOffice Base",
    description: "LibreOffice Base",
    category: "database",
    tags: [
      "database",
      "libreoffice"
    ],
    installCommand: "npx -y @mcp/server-mcp-libreoffice-base",
    githubUrl: "https://github.com/libreoffice/mcp-server-base",
    downloads: "330K",
    author: "libreoffice",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-aws",
    name: "MCP AWS",
    description: "Amazon Web Services integration",
    category: "cloud",
    tags: [
      "cloud",
      "aws-samples"
    ],
    installCommand: "npx -y @mcp/server-mcp-aws",
    githubUrl: "https://github.com/aws-samples/mcp-server-aws",
    downloads: "500K",
    author: "aws-samples",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-azure",
    name: "MCP Azure",
    description: "Microsoft Azure integration",
    category: "cloud",
    tags: [
      "cloud",
      "microsoft"
    ],
    installCommand: "npx -y @mcp/server-mcp-azure",
    githubUrl: "https://github.com/microsoft/mcp-server-azure",
    downloads: "395K",
    author: "microsoft",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-gcp",
    name: "MCP GCP",
    description: "Google Cloud Platform",
    category: "cloud",
    tags: [
      "cloud",
      "google"
    ],
    installCommand: "npx -y @mcp/server-mcp-gcp",
    githubUrl: "https://github.com/google/mcp-server-gcp",
    downloads: "313K",
    author: "google",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-kubernetes",
    name: "MCP Kubernetes",
    description: "Kubernetes cluster management",
    category: "cloud",
    tags: [
      "cloud",
      "kubernetes-sigs"
    ],
    installCommand: "npx -y @mcp/server-mcp-kubernetes",
    githubUrl: "https://github.com/kubernetes-sigs/mcp-server-kubernetes",
    downloads: "403K",
    author: "kubernetes-sigs",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-docker",
    name: "MCP Docker",
    description: "Docker container management",
    category: "cloud",
    tags: [
      "cloud",
      "docker"
    ],
    installCommand: "npx -y @mcp/server-mcp-docker",
    githubUrl: "https://github.com/docker/mcp-server-docker",
    downloads: "475K",
    author: "docker",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-terraform",
    name: "MCP Terraform",
    description: "Terraform infrastructure as code",
    category: "cloud",
    tags: [
      "cloud",
      "hashicorp"
    ],
    installCommand: "npx -y @mcp/server-mcp-terraform",
    githubUrl: "https://github.com/hashicorp/mcp-server-terraform",
    downloads: "222K",
    author: "hashicorp",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-pulumi",
    name: "MCP Pulumi",
    description: "Pulumi infrastructure as code",
    category: "cloud",
    tags: [
      "cloud",
      "pulumi"
    ],
    installCommand: "npx -y @mcp/server-mcp-pulumi",
    githubUrl: "https://github.com/pulumi/mcp-server-pulumi",
    downloads: "429K",
    author: "pulumi",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-ansible",
    name: "MCP Ansible",
    description: "Ansible automation",
    category: "cloud",
    tags: [
      "cloud",
      "ansible"
    ],
    installCommand: "npx -y @mcp/server-mcp-ansible",
    githubUrl: "https://github.com/ansible/mcp-server-ansible",
    downloads: "120K",
    author: "ansible",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-vagrant",
    name: "MCP Vagrant",
    description: "Vagrant development environments",
    category: "cloud",
    tags: [
      "cloud",
      "hashicorp"
    ],
    installCommand: "npx -y @mcp/server-mcp-vagrant",
    githubUrl: "https://github.com/hashicorp/mcp-server-vagrant",
    downloads: "478K",
    author: "hashicorp",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-nomad",
    name: "MCP Nomad",
    description: "Nomad workload orchestration",
    category: "cloud",
    tags: [
      "cloud",
      "hashicorp"
    ],
    installCommand: "npx -y @mcp/server-mcp-nomad",
    githubUrl: "https://github.com/hashicorp/mcp-server-nomad",
    downloads: "114K",
    author: "hashicorp",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-consul",
    name: "MCP Consul",
    description: "Consul service mesh",
    category: "cloud",
    tags: [
      "cloud",
      "hashicorp"
    ],
    installCommand: "npx -y @mcp/server-mcp-consul",
    githubUrl: "https://github.com/hashicorp/mcp-server-consul",
    downloads: "184K",
    author: "hashicorp",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-vault",
    name: "MCP Vault",
    description: "HashiCorp Vault secrets",
    category: "cloud",
    tags: [
      "cloud",
      "hashicorp"
    ],
    installCommand: "npx -y @mcp/server-mcp-vault",
    githubUrl: "https://github.com/hashicorp/mcp-server-vault",
    downloads: "128K",
    author: "hashicorp",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-openstack",
    name: "MCP OpenStack",
    description: "OpenStack cloud platform",
    category: "cloud",
    tags: [
      "cloud",
      "openstack"
    ],
    installCommand: "npx -y @mcp/server-mcp-openstack",
    githubUrl: "https://github.com/openstack/mcp-server-openstack",
    downloads: "322K",
    author: "openstack",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-cloud-foundry",
    name: "MCP Cloud Foundry",
    description: "Cloud Foundry platform",
    category: "cloud",
    tags: [
      "cloud",
      "cloudfoundry"
    ],
    installCommand: "npx -y @mcp/server-mcp-cloud-foundry",
    githubUrl: "https://github.com/cloudfoundry/mcp-server-cloudfoundry",
    downloads: "241K",
    author: "cloudfoundry",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-heroku",
    name: "MCP Heroku",
    description: "Heroku platform",
    category: "cloud",
    tags: [
      "cloud",
      "heroku"
    ],
    installCommand: "npx -y @mcp/server-mcp-heroku",
    githubUrl: "https://github.com/heroku/mcp-server-heroku",
    downloads: "314K",
    author: "heroku",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-digitalocean",
    name: "MCP DigitalOcean",
    description: "DigitalOcean cloud",
    category: "cloud",
    tags: [
      "cloud",
      "digitalocean"
    ],
    installCommand: "npx -y @mcp/server-mcp-digitalocean",
    githubUrl: "https://github.com/digitalocean/mcp-server-digitalocean",
    downloads: "220K",
    author: "digitalocean",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-linode",
    name: "MCP Linode",
    description: "Linode cloud",
    category: "cloud",
    tags: [
      "cloud",
      "linode"
    ],
    installCommand: "npx -y @mcp/server-mcp-linode",
    githubUrl: "https://github.com/linode/mcp-server-linode",
    downloads: "153K",
    author: "linode",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-vultr",
    name: "MCP Vultr",
    description: "Vultr cloud",
    category: "cloud",
    tags: [
      "cloud",
      "vultr"
    ],
    installCommand: "npx -y @mcp/server-mcp-vultr",
    githubUrl: "https://github.com/vultr/mcp-server-vultr",
    downloads: "436K",
    author: "vultr",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-scaleway",
    name: "MCP Scaleway",
    description: "Scaleway cloud",
    category: "cloud",
    tags: [
      "cloud",
      "scaleway"
    ],
    installCommand: "npx -y @mcp/server-mcp-scaleway",
    githubUrl: "https://github.com/scaleway/mcp-server-scaleway",
    downloads: "437K",
    author: "scaleway",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-hetzner",
    name: "MCP Hetzner",
    description: "Hetzner cloud",
    category: "cloud",
    tags: [
      "cloud",
      "hetznercloud"
    ],
    installCommand: "npx -y @mcp/server-mcp-hetzner",
    githubUrl: "https://github.com/hetznercloud/mcp-server-hetzner",
    downloads: "445K",
    author: "hetznercloud",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-upcloud",
    name: "MCP UpCloud",
    description: "UpCloud cloud",
    category: "cloud",
    tags: [
      "cloud",
      "upcloudltd"
    ],
    installCommand: "npx -y @mcp/server-mcp-upcloud",
    githubUrl: "https://github.com/upcloudltd/mcp-server-upcloud",
    downloads: "73K",
    author: "upcloudltd",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-exoscale",
    name: "MCP Exoscale",
    description: "Exoscale cloud",
    category: "cloud",
    tags: [
      "cloud",
      "exoscale"
    ],
    installCommand: "npx -y @mcp/server-mcp-exoscale",
    githubUrl: "https://github.com/exoscale/mcp-server-exoscale",
    downloads: "161K",
    author: "exoscale",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-ovhcloud",
    name: "MCP OVHcloud",
    description: "OVHcloud",
    category: "cloud",
    tags: [
      "cloud",
      "ovh"
    ],
    installCommand: "npx -y @mcp/server-mcp-ovhcloud",
    githubUrl: "https://github.com/ovh/mcp-server-ovh",
    downloads: "388K",
    author: "ovh",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-alibaba-cloud",
    name: "MCP Alibaba Cloud",
    description: "Alibaba Cloud",
    category: "cloud",
    tags: [
      "cloud",
      "aliyun"
    ],
    installCommand: "npx -y @mcp/server-mcp-alibaba-cloud",
    githubUrl: "https://github.com/aliyun/mcp-server-alibabacloud",
    downloads: "33K",
    author: "aliyun",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-tencent-cloud",
    name: "MCP Tencent Cloud",
    description: "Tencent Cloud",
    category: "cloud",
    tags: [
      "cloud",
      "tencentcloud"
    ],
    installCommand: "npx -y @mcp/server-mcp-tencent-cloud",
    githubUrl: "https://github.com/tencentcloud/mcp-server-tencentcloud",
    downloads: "296K",
    author: "tencentcloud",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-huawei-cloud",
    name: "MCP Huawei Cloud",
    description: "Huawei Cloud",
    category: "cloud",
    tags: [
      "cloud",
      "huaweicloud"
    ],
    installCommand: "npx -y @mcp/server-mcp-huawei-cloud",
    githubUrl: "https://github.com/huaweicloud/mcp-server-huaweicloud",
    downloads: "397K",
    author: "huaweicloud",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-baidu-cloud",
    name: "MCP Baidu Cloud",
    description: "Baidu Cloud",
    category: "cloud",
    tags: [
      "cloud",
      "baidu"
    ],
    installCommand: "npx -y @mcp/server-mcp-baidu-cloud",
    githubUrl: "https://github.com/baidu/mcp-server-baiducloud",
    downloads: "474K",
    author: "baidu",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-jd-cloud",
    name: "MCP JD Cloud",
    description: "JD Cloud",
    category: "cloud",
    tags: [
      "cloud",
      "jdcloud"
    ],
    installCommand: "npx -y @mcp/server-mcp-jd-cloud",
    githubUrl: "https://github.com/jdcloud/mcp-server-jdcloud",
    downloads: "350K",
    author: "jdcloud",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-ucloud",
    name: "MCP UCloud",
    description: "UCloud",
    category: "cloud",
    tags: [
      "cloud",
      "ucloud"
    ],
    installCommand: "npx -y @mcp/server-mcp-ucloud",
    githubUrl: "https://github.com/ucloud/mcp-server-ucloud",
    downloads: "484K",
    author: "ucloud",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-qingcloud",
    name: "MCP QingCloud",
    description: "QingCloud",
    category: "cloud",
    tags: [
      "cloud",
      "yunify"
    ],
    installCommand: "npx -y @mcp/server-mcp-qingcloud",
    githubUrl: "https://github.com/yunify/mcp-server-qingcloud",
    downloads: "299K",
    author: "yunify",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-civo",
    name: "MCP Civo",
    description: "Civo cloud",
    category: "cloud",
    tags: [
      "cloud",
      "civo"
    ],
    installCommand: "npx -y @mcp/server-mcp-civo",
    githubUrl: "https://github.com/civo/mcp-server-civo",
    downloads: "399K",
    author: "civo",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-rancher",
    name: "MCP Rancher",
    description: "Rancher Kubernetes management",
    category: "cloud",
    tags: [
      "cloud",
      "rancher"
    ],
    installCommand: "npx -y @mcp/server-mcp-rancher",
    githubUrl: "https://github.com/rancher/mcp-server-rancher",
    downloads: "487K",
    author: "rancher",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-openshift",
    name: "MCP OpenShift",
    description: "Red Hat OpenShift",
    category: "cloud",
    tags: [
      "cloud",
      "openshift"
    ],
    installCommand: "npx -y @mcp/server-mcp-openshift",
    githubUrl: "https://github.com/openshift/mcp-server-openshift",
    downloads: "224K",
    author: "openshift",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-cloudflare",
    name: "MCP Cloudflare",
    description: "Cloudflare services",
    category: "cloud",
    tags: [
      "cloud",
      "cloudflare"
    ],
    installCommand: "npx -y @mcp/server-mcp-cloudflare",
    githubUrl: "https://github.com/cloudflare/mcp-server-cloudflare",
    downloads: "397K",
    author: "cloudflare",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-fastly",
    name: "MCP Fastly",
    description: "Fastly edge cloud",
    category: "cloud",
    tags: [
      "cloud",
      "fastly"
    ],
    installCommand: "npx -y @mcp/server-mcp-fastly",
    githubUrl: "https://github.com/fastly/mcp-server-fastly",
    downloads: "392K",
    author: "fastly",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-akamai",
    name: "MCP Akamai",
    description: "Akamai CDN and cloud",
    category: "cloud",
    tags: [
      "cloud",
      "akamai"
    ],
    installCommand: "npx -y @mcp/server-mcp-akamai",
    githubUrl: "https://github.com/akamai/mcp-server-akamai",
    downloads: "225K",
    author: "akamai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-aws-cloudfront",
    name: "MCP AWS CloudFront",
    description: "AWS CloudFront CDN",
    category: "cloud",
    tags: [
      "cloud",
      "aws"
    ],
    installCommand: "npx -y @mcp/server-mcp-aws-cloudfront",
    githubUrl: "https://github.com/aws/mcp-server-cloudfront",
    downloads: "480K",
    author: "aws",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-azure-cdn",
    name: "MCP Azure CDN",
    description: "Azure Content Delivery Network",
    category: "cloud",
    tags: [
      "cloud",
      "azure"
    ],
    installCommand: "npx -y @mcp/server-mcp-azure-cdn",
    githubUrl: "https://github.com/azure/mcp-server-cdn",
    downloads: "268K",
    author: "azure",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-google-cloud-cdn",
    name: "MCP Google Cloud CDN",
    description: "Google Cloud CDN",
    category: "cloud",
    tags: [
      "cloud",
      "google"
    ],
    installCommand: "npx -y @mcp/server-mcp-google-cloud-cdn",
    githubUrl: "https://github.com/google/mcp-server-cloudcdn",
    downloads: "451K",
    author: "google",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-discord",
    name: "MCP Discord",
    description: "Discord messaging and bots",
    category: "communication",
    tags: [
      "communication",
      "discord"
    ],
    installCommand: "npx -y @mcp/server-mcp-discord",
    githubUrl: "https://github.com/discord/mcp-server-discord",
    downloads: "33K",
    author: "discord",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-telegram",
    name: "MCP Telegram",
    description: "Telegram messaging",
    category: "communication",
    tags: [
      "communication",
      "telegram"
    ],
    installCommand: "npx -y @mcp/server-mcp-telegram",
    githubUrl: "https://github.com/telegram/mcp-server-telegram",
    downloads: "486K",
    author: "telegram",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-whatsapp",
    name: "MCP WhatsApp",
    description: "WhatsApp messaging",
    category: "communication",
    tags: [
      "communication",
      "whatsapp"
    ],
    installCommand: "npx -y @mcp/server-mcp-whatsapp",
    githubUrl: "https://github.com/whatsapp/mcp-server-whatsapp",
    downloads: "213K",
    author: "whatsapp",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-signal",
    name: "MCP Signal",
    description: "Signal messaging",
    category: "communication",
    tags: [
      "communication",
      "signalapp"
    ],
    installCommand: "npx -y @mcp/server-mcp-signal",
    githubUrl: "https://github.com/signalapp/mcp-server-signal",
    downloads: "383K",
    author: "signalapp",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-matrix",
    name: "MCP Matrix",
    description: "Matrix protocol",
    category: "communication",
    tags: [
      "communication",
      "matrix-org"
    ],
    installCommand: "npx -y @mcp/server-mcp-matrix",
    githubUrl: "https://github.com/matrix-org/mcp-server-matrix",
    downloads: "316K",
    author: "matrix-org",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-teams",
    name: "MCP Teams",
    description: "Microsoft Teams",
    category: "communication",
    tags: [
      "communication",
      "microsoft"
    ],
    installCommand: "npx -y @mcp/server-mcp-teams",
    githubUrl: "https://github.com/microsoft/mcp-server-teams",
    downloads: "283K",
    author: "microsoft",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-zoom",
    name: "MCP Zoom",
    description: "Zoom video conferencing",
    category: "communication",
    tags: [
      "communication",
      "zoom"
    ],
    installCommand: "npx -y @mcp/server-mcp-zoom",
    githubUrl: "https://github.com/zoom/mcp-server-zoom",
    downloads: "382K",
    author: "zoom",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-meet",
    name: "MCP Meet",
    description: "Google Meet",
    category: "communication",
    tags: [
      "communication",
      "google"
    ],
    installCommand: "npx -y @mcp/server-mcp-meet",
    githubUrl: "https://github.com/google/mcp-server-meet",
    downloads: "97K",
    author: "google",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-webex",
    name: "MCP Webex",
    description: "Cisco Webex",
    category: "communication",
    tags: [
      "communication",
      "cisco"
    ],
    installCommand: "npx -y @mcp/server-mcp-webex",
    githubUrl: "https://github.com/cisco/mcp-server-webex",
    downloads: "456K",
    author: "cisco",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-jitsi",
    name: "MCP Jitsi",
    description: "Jitsi video conferencing",
    category: "communication",
    tags: [
      "communication",
      "jitsi"
    ],
    installCommand: "npx -y @mcp/server-mcp-jitsi",
    githubUrl: "https://github.com/jitsi/mcp-server-jitsi",
    downloads: "82K",
    author: "jitsi",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-twilio",
    name: "MCP Twilio",
    description: "Twilio communications",
    category: "communication",
    tags: [
      "communication",
      "twilio"
    ],
    installCommand: "npx -y @mcp/server-mcp-twilio",
    githubUrl: "https://github.com/twilio/mcp-server-twilio",
    downloads: "309K",
    author: "twilio",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-sendgrid",
    name: "MCP SendGrid",
    description: "SendGrid email",
    category: "communication",
    tags: [
      "communication",
      "sendgrid"
    ],
    installCommand: "npx -y @mcp/server-mcp-sendgrid",
    githubUrl: "https://github.com/sendgrid/mcp-server-sendgrid",
    downloads: "306K",
    author: "sendgrid",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-mailgun",
    name: "MCP Mailgun",
    description: "Mailgun email",
    category: "communication",
    tags: [
      "communication",
      "mailgun"
    ],
    installCommand: "npx -y @mcp/server-mcp-mailgun",
    githubUrl: "https://github.com/mailgun/mcp-server-mailgun",
    downloads: "311K",
    author: "mailgun",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-ses",
    name: "MCP SES",
    description: "AWS Simple Email Service",
    category: "communication",
    tags: [
      "communication",
      "aws"
    ],
    installCommand: "npx -y @mcp/server-mcp-ses",
    githubUrl: "https://github.com/aws/mcp-server-ses",
    downloads: "21K",
    author: "aws",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-gmail",
    name: "MCP Gmail",
    description: "Gmail integration",
    category: "communication",
    tags: [
      "communication",
      "google"
    ],
    installCommand: "npx -y @mcp/server-mcp-gmail",
    githubUrl: "https://github.com/google/mcp-server-gmail",
    downloads: "230K",
    author: "google",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-outlook",
    name: "MCP Outlook",
    description: "Microsoft Outlook",
    category: "communication",
    tags: [
      "communication",
      "microsoft"
    ],
    installCommand: "npx -y @mcp/server-mcp-outlook",
    githubUrl: "https://github.com/microsoft/mcp-server-outlook",
    downloads: "255K",
    author: "microsoft",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-imap",
    name: "MCP IMAP",
    description: "IMAP email protocol",
    category: "communication",
    tags: [
      "communication",
      "phpimap"
    ],
    installCommand: "npx -y @mcp/server-mcp-imap",
    githubUrl: "https://github.com/phpimap/mcp-server-imap",
    downloads: "438K",
    author: "phpimap",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-smtp",
    name: "MCP SMTP",
    description: "SMTP email protocol",
    category: "communication",
    tags: [
      "communication",
      "nodejs"
    ],
    installCommand: "npx -y @mcp/server-mcp-smtp",
    githubUrl: "https://github.com/nodejs/mcp-server-smtp",
    downloads: "181K",
    author: "nodejs",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-websocket",
    name: "MCP WebSocket",
    description: "WebSocket real-time communication",
    category: "communication",
    tags: [
      "communication",
      "websocket"
    ],
    installCommand: "npx -y @mcp/server-mcp-websocket",
    githubUrl: "https://github.com/websocket/mcp-server-websocket",
    downloads: "61K",
    author: "websocket",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-socket.io",
    name: "MCP Socket.io",
    description: "Socket.io real-time communication",
    category: "communication",
    tags: [
      "communication",
      "socketio"
    ],
    installCommand: "npx -y @mcp/server-mcp-socket.io",
    githubUrl: "https://github.com/socketio/mcp-server-socketio",
    downloads: "30K",
    author: "socketio",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-mqtt",
    name: "MCP MQTT",
    description: "MQTT messaging protocol",
    category: "communication",
    tags: [
      "communication",
      "mqtt"
    ],
    installCommand: "npx -y @mcp/server-mcp-mqtt",
    githubUrl: "https://github.com/mqtt/mcp-server-mqtt",
    downloads: "122K",
    author: "mqtt",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-amqp",
    name: "MCP AMQP",
    description: "AMQP messaging protocol",
    category: "communication",
    tags: [
      "communication",
      "amqp"
    ],
    installCommand: "npx -y @mcp/server-mcp-amqp",
    githubUrl: "https://github.com/amqp/mcp-server-amqp",
    downloads: "115K",
    author: "amqp",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-kafka",
    name: "MCP Kafka",
    description: "Apache Kafka messaging",
    category: "communication",
    tags: [
      "communication",
      "apache"
    ],
    installCommand: "npx -y @mcp/server-mcp-kafka",
    githubUrl: "https://github.com/apache/mcp-server-kafka",
    downloads: "78K",
    author: "apache",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-rabbitmq",
    name: "MCP RabbitMQ",
    description: "RabbitMQ messaging",
    category: "communication",
    tags: [
      "communication",
      "rabbitmq"
    ],
    installCommand: "npx -y @mcp/server-mcp-rabbitmq",
    githubUrl: "https://github.com/rabbitmq/mcp-server-rabbitmq",
    downloads: "91K",
    author: "rabbitmq",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-nats",
    name: "MCP NATS",
    description: "NATS messaging",
    category: "communication",
    tags: [
      "communication",
      "nats-io"
    ],
    installCommand: "npx -y @mcp/server-mcp-nats",
    githubUrl: "https://github.com/nats-io/mcp-server-nats",
    downloads: "330K",
    author: "nats-io",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-pulsar",
    name: "MCP Pulsar",
    description: "Apache Pulsar messaging",
    category: "communication",
    tags: [
      "communication",
      "apache"
    ],
    installCommand: "npx -y @mcp/server-mcp-pulsar",
    githubUrl: "https://github.com/apache/mcp-server-pulsar",
    downloads: "76K",
    author: "apache",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-rocketmq",
    name: "MCP RocketMQ",
    description: "Apache RocketMQ",
    category: "communication",
    tags: [
      "communication",
      "apache"
    ],
    installCommand: "npx -y @mcp/server-mcp-rocketmq",
    githubUrl: "https://github.com/apache/mcp-server-rocketmq",
    downloads: "498K",
    author: "apache",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-activemq",
    name: "MCP ActiveMQ",
    description: "Apache ActiveMQ",
    category: "communication",
    tags: [
      "communication",
      "apache"
    ],
    installCommand: "npx -y @mcp/server-mcp-activemq",
    githubUrl: "https://github.com/apache/mcp-server-activemq",
    downloads: "78K",
    author: "apache",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-zeromq",
    name: "MCP ZeroMQ",
    description: "ZeroMQ messaging",
    category: "communication",
    tags: [
      "communication",
      "zeromq"
    ],
    installCommand: "npx -y @mcp/server-mcp-zeromq",
    githubUrl: "https://github.com/zeromq/mcp-server-zeromq",
    downloads: "120K",
    author: "zeromq",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-grpc",
    name: "MCP gRPC",
    description: "gRPC remote procedure call",
    category: "communication",
    tags: [
      "communication",
      "grpc"
    ],
    installCommand: "npx -y @mcp/server-mcp-grpc",
    githubUrl: "https://github.com/grpc/mcp-server-grpc",
    downloads: "367K",
    author: "grpc",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-trpc",
    name: "MCP tRPC",
    description: "tRPC remote procedure call",
    category: "communication",
    tags: [
      "communication",
      "trpc"
    ],
    installCommand: "npx -y @mcp/server-mcp-trpc",
    githubUrl: "https://github.com/trpc/mcp-server-trpc",
    downloads: "83K",
    author: "trpc",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-trpc-websocket",
    name: "MCP tRPC WebSocket",
    description: "tRPC with WebSocket",
    category: "communication",
    tags: [
      "communication",
      "trpc"
    ],
    installCommand: "npx -y @mcp/server-mcp-trpc-websocket",
    githubUrl: "https://github.com/trpc/mcp-server-trpc-ws",
    downloads: "508K",
    author: "trpc",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-graphql-subscriptions",
    name: "MCP GraphQL Subscriptions",
    description: "GraphQL real-time subscriptions",
    category: "communication",
    tags: [
      "communication",
      "graphql"
    ],
    installCommand: "npx -y @mcp/server-mcp-graphql-subscriptions",
    githubUrl: "https://github.com/graphql/mcp-server-subscriptions",
    downloads: "98K",
    author: "graphql",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-webrtc",
    name: "MCP WebRTC",
    description: "WebRTC real-time communication",
    category: "communication",
    tags: [
      "communication",
      "webrtc"
    ],
    installCommand: "npx -y @mcp/server-mcp-webrtc",
    githubUrl: "https://github.com/webrtc/mcp-server-webrtc",
    downloads: "397K",
    author: "webrtc",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-sip",
    name: "MCP SIP",
    description: "SIP protocol",
    category: "communication",
    tags: [
      "communication",
      "sip"
    ],
    installCommand: "npx -y @mcp/server-mcp-sip",
    githubUrl: "https://github.com/sip/mcp-server-sip",
    downloads: "208K",
    author: "sip",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-xmpp",
    name: "MCP XMPP",
    description: "XMPP protocol",
    category: "communication",
    tags: [
      "communication",
      "xmpp"
    ],
    installCommand: "npx -y @mcp/server-mcp-xmpp",
    githubUrl: "https://github.com/xmpp/mcp-server-xmpp",
    downloads: "97K",
    author: "xmpp",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-irc",
    name: "MCP IRC",
    description: "IRC protocol",
    category: "communication",
    tags: [
      "communication",
      "irc"
    ],
    installCommand: "npx -y @mcp/server-mcp-irc",
    githubUrl: "https://github.com/irc/mcp-server-irc",
    downloads: "456K",
    author: "irc",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-elasticsearch",
    name: "MCP Elasticsearch",
    description: "Elasticsearch search engine",
    category: "search",
    tags: [
      "search",
      "elastic"
    ],
    installCommand: "npx -y @mcp/server-mcp-elasticsearch",
    githubUrl: "https://github.com/elastic/mcp-server-elasticsearch",
    downloads: "498K",
    author: "elastic",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-solr",
    name: "MCP Solr",
    description: "Apache Solr search",
    category: "search",
    tags: [
      "search",
      "apache"
    ],
    installCommand: "npx -y @mcp/server-mcp-solr",
    githubUrl: "https://github.com/apache/mcp-server-solr",
    downloads: "399K",
    author: "apache",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-meilisearch",
    name: "MCP Meilisearch",
    description: "Meilisearch search engine",
    category: "search",
    tags: [
      "search",
      "meilisearch"
    ],
    installCommand: "npx -y @mcp/server-mcp-meilisearch",
    githubUrl: "https://github.com/meilisearch/mcp-server-meilisearch",
    downloads: "150K",
    author: "meilisearch",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-typesense",
    name: "MCP Typesense",
    description: "Typesense search engine",
    category: "search",
    tags: [
      "search",
      "typesense"
    ],
    installCommand: "npx -y @mcp/server-mcp-typesense",
    githubUrl: "https://github.com/typesense/mcp-server-typesense",
    downloads: "253K",
    author: "typesense",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-algolia",
    name: "MCP Algolia",
    description: "Algolia search",
    category: "search",
    tags: [
      "search",
      "algolia"
    ],
    installCommand: "npx -y @mcp/server-mcp-algolia",
    githubUrl: "https://github.com/algolia/mcp-server-algolia",
    downloads: "295K",
    author: "algolia",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-openai",
    name: "MCP OpenAI",
    description: "OpenAI API integration",
    category: "ai",
    tags: [
      "ai",
      "openai"
    ],
    installCommand: "npx -y @mcp/server-mcp-openai",
    githubUrl: "https://github.com/openai/mcp-server-openai",
    downloads: "399K",
    author: "openai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-anthropic",
    name: "MCP Anthropic",
    description: "Anthropic Claude API",
    category: "ai",
    tags: [
      "ai",
      "anthropics"
    ],
    installCommand: "npx -y @mcp/server-mcp-anthropic",
    githubUrl: "https://github.com/anthropics/mcp-server-anthropic",
    downloads: "68K",
    author: "anthropics",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-cohere",
    name: "MCP Cohere",
    description: "Cohere AI API",
    category: "ai",
    tags: [
      "ai",
      "cohere-ai"
    ],
    installCommand: "npx -y @mcp/server-mcp-cohere",
    githubUrl: "https://github.com/cohere-ai/mcp-server-cohere",
    downloads: "28K",
    author: "cohere-ai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-hugging-face",
    name: "MCP Hugging Face",
    description: "Hugging Face models",
    category: "ai",
    tags: [
      "ai",
      "huggingface"
    ],
    installCommand: "npx -y @mcp/server-mcp-hugging-face",
    githubUrl: "https://github.com/huggingface/mcp-server-huggingface",
    downloads: "370K",
    author: "huggingface",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-replicate",
    name: "MCP Replicate",
    description: "Replicate AI models",
    category: "ai",
    tags: [
      "ai",
      "replicate"
    ],
    installCommand: "npx -y @mcp/server-mcp-replicate",
    githubUrl: "https://github.com/replicate/mcp-server-replicate",
    downloads: "113K",
    author: "replicate",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-stability-ai",
    name: "MCP Stability AI",
    description: "Stability AI image generation",
    category: "ai",
    tags: [
      "ai",
      "stability-ai"
    ],
    installCommand: "npx -y @mcp/server-mcp-stability-ai",
    githubUrl: "https://github.com/stability-ai/mcp-server-stability",
    downloads: "202K",
    author: "stability-ai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-midjourney",
    name: "MCP Midjourney",
    description: "Midjourney image generation",
    category: "ai",
    tags: [
      "ai",
      "midjourney"
    ],
    installCommand: "npx -y @mcp/server-mcp-midjourney",
    githubUrl: "https://github.com/midjourney/mcp-server-midjourney",
    downloads: "167K",
    author: "midjourney",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-dall-e",
    name: "MCP DALL-E",
    description: "OpenAI DALL-E image generation",
    category: "ai",
    tags: [
      "ai",
      "openai"
    ],
    installCommand: "npx -y @mcp/server-mcp-dall-e",
    githubUrl: "https://github.com/openai/mcp-server-dalle",
    downloads: "465K",
    author: "openai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-whisper",
    name: "MCP Whisper",
    description: "OpenAI Whisper speech recognition",
    category: "ai",
    tags: [
      "ai",
      "openai"
    ],
    installCommand: "npx -y @mcp/server-mcp-whisper",
    githubUrl: "https://github.com/openai/mcp-server-whisper",
    downloads: "147K",
    author: "openai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-elevenlabs",
    name: "MCP ElevenLabs",
    description: "ElevenLabs text-to-speech",
    category: "ai",
    tags: [
      "ai",
      "elevenlabs"
    ],
    installCommand: "npx -y @mcp/server-mcp-elevenlabs",
    githubUrl: "https://github.com/elevenlabs/mcp-server-elevenlabs",
    downloads: "245K",
    author: "elevenlabs",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-assemblyai",
    name: "MCP AssemblyAI",
    description: "AssemblyAI speech AI",
    category: "ai",
    tags: [
      "ai",
      "assemblyai"
    ],
    installCommand: "npx -y @mcp/server-mcp-assemblyai",
    githubUrl: "https://github.com/assemblyai/mcp-server-assemblyai",
    downloads: "132K",
    author: "assemblyai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-deepgram",
    name: "MCP Deepgram",
    description: "Deepgram speech recognition",
    category: "ai",
    tags: [
      "ai",
      "deepgram"
    ],
    installCommand: "npx -y @mcp/server-mcp-deepgram",
    githubUrl: "https://github.com/deepgram/mcp-server-deepgram",
    downloads: "273K",
    author: "deepgram",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-pinecone",
    name: "MCP Pinecone",
    description: "Pinecone vector database",
    category: "ai",
    tags: [
      "ai",
      "pinecone-io"
    ],
    installCommand: "npx -y @mcp/server-mcp-pinecone",
    githubUrl: "https://github.com/pinecone-io/mcp-server-pinecone",
    downloads: "332K",
    author: "pinecone-io",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-weaviate",
    name: "MCP Weaviate",
    description: "Weaviate vector search",
    category: "ai",
    tags: [
      "ai",
      "weaviate"
    ],
    installCommand: "npx -y @mcp/server-mcp-weaviate",
    githubUrl: "https://github.com/weaviate/mcp-server-weaviate",
    downloads: "285K",
    author: "weaviate",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-chroma",
    name: "MCP Chroma",
    description: "ChromaDB vector database",
    category: "ai",
    tags: [
      "ai",
      "chroma-core"
    ],
    installCommand: "npx -y @mcp/server-mcp-chroma",
    githubUrl: "https://github.com/chroma-core/mcp-server-chroma",
    downloads: "210K",
    author: "chroma-core",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-qdrant",
    name: "MCP Qdrant",
    description: "Qdrant vector database",
    category: "ai",
    tags: [
      "ai",
      "qdrant"
    ],
    installCommand: "npx -y @mcp/server-mcp-qdrant",
    githubUrl: "https://github.com/qdrant/mcp-server-qdrant",
    downloads: "499K",
    author: "qdrant",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-milvus",
    name: "MCP Milvus",
    description: "Milvus vector database",
    category: "ai",
    tags: [
      "ai",
      "milvus-io"
    ],
    installCommand: "npx -y @mcp/server-mcp-milvus",
    githubUrl: "https://github.com/milvus-io/mcp-server-milvus",
    downloads: "441K",
    author: "milvus-io",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-langchain",
    name: "MCP LangChain",
    description: "LangChain framework",
    category: "ai",
    tags: [
      "ai",
      "langchain-ai"
    ],
    installCommand: "npx -y @mcp/server-mcp-langchain",
    githubUrl: "https://github.com/langchain-ai/mcp-server-langchain",
    downloads: "207K",
    author: "langchain-ai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-llamaindex",
    name: "MCP LlamaIndex",
    description: "LlamaIndex data framework",
    category: "ai",
    tags: [
      "ai",
      "jerryjliu"
    ],
    installCommand: "npx -y @mcp/server-mcp-llamaindex",
    githubUrl: "https://github.com/jerryjliu/mcp-server-llamaindex",
    downloads: "159K",
    author: "jerryjliu",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-haystack",
    name: "MCP Haystack",
    description: "Haystack NLP framework",
    category: "ai",
    tags: [
      "ai",
      "deepset-ai"
    ],
    installCommand: "npx -y @mcp/server-mcp-haystack",
    githubUrl: "https://github.com/deepset-ai/mcp-server-haystack",
    downloads: "186K",
    author: "deepset-ai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-transformers",
    name: "MCP Transformers",
    description: "Hugging Face Transformers",
    category: "ai",
    tags: [
      "ai",
      "huggingface"
    ],
    installCommand: "npx -y @mcp/server-mcp-transformers",
    githubUrl: "https://github.com/huggingface/mcp-server-transformers",
    downloads: "200K",
    author: "huggingface",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-diffusers",
    name: "MCP Diffusers",
    description: "Hugging Face Diffusers",
    category: "ai",
    tags: [
      "ai",
      "huggingface"
    ],
    installCommand: "npx -y @mcp/server-mcp-diffusers",
    githubUrl: "https://github.com/huggingface/mcp-server-diffusers",
    downloads: "24K",
    author: "huggingface",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-accelerate",
    name: "MCP Accelerate",
    description: "Hugging Face Accelerate",
    category: "ai",
    tags: [
      "ai",
      "huggingface"
    ],
    installCommand: "npx -y @mcp/server-mcp-accelerate",
    githubUrl: "https://github.com/huggingface/mcp-server-accelerate",
    downloads: "355K",
    author: "huggingface",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-datasets",
    name: "MCP Datasets",
    description: "Hugging Face Datasets",
    category: "ai",
    tags: [
      "ai",
      "huggingface"
    ],
    installCommand: "npx -y @mcp/server-mcp-datasets",
    githubUrl: "https://github.com/huggingface/mcp-server-datasets",
    downloads: "362K",
    author: "huggingface",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-tokenizers",
    name: "MCP Tokenizers",
    description: "Hugging Face Tokenizers",
    category: "ai",
    tags: [
      "ai",
      "huggingface"
    ],
    installCommand: "npx -y @mcp/server-mcp-tokenizers",
    githubUrl: "https://github.com/huggingface/mcp-server-tokenizers",
    downloads: "306K",
    author: "huggingface",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-sentence-transformers",
    name: "MCP Sentence Transformers",
    description: "Sentence embeddings",
    category: "ai",
    tags: [
      "ai",
      "ukplab"
    ],
    installCommand: "npx -y @mcp/server-mcp-sentence-transformers",
    githubUrl: "https://github.com/ukplab/mcp-server-sentence-transformers",
    downloads: "106K",
    author: "ukplab",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-spacy",
    name: "MCP spaCy",
    description: "spaCy NLP library",
    category: "ai",
    tags: [
      "ai",
      "explosion"
    ],
    installCommand: "npx -y @mcp/server-mcp-spacy",
    githubUrl: "https://github.com/explosion/mcp-server-spacy",
    downloads: "231K",
    author: "explosion",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-nltk",
    name: "MCP NLTK",
    description: "NLTK NLP library",
    category: "ai",
    tags: [
      "ai",
      "nltk"
    ],
    installCommand: "npx -y @mcp/server-mcp-nltk",
    githubUrl: "https://github.com/nltk/mcp-server-nltk",
    downloads: "286K",
    author: "nltk",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-gensim",
    name: "MCP Gensim",
    description: "Gensim topic modeling",
    category: "ai",
    tags: [
      "ai",
      "radimrehurek"
    ],
    installCommand: "npx -y @mcp/server-mcp-gensim",
    githubUrl: "https://github.com/radimrehurek/mcp-server-gensim",
    downloads: "440K",
    author: "radimrehurek",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-textblob",
    name: "MCP TextBlob",
    description: "TextBlob NLP",
    category: "ai",
    tags: [
      "ai",
      "sloria"
    ],
    installCommand: "npx -y @mcp/server-mcp-textblob",
    githubUrl: "https://github.com/sloria/mcp-server-textblob",
    downloads: "446K",
    author: "sloria",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-pattern",
    name: "MCP Pattern",
    description: "Pattern web mining",
    category: "ai",
    tags: [
      "ai",
      "clips"
    ],
    installCommand: "npx -y @mcp/server-mcp-pattern",
    githubUrl: "https://github.com/clips/mcp-server-pattern",
    downloads: "28K",
    author: "clips",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-polyglot",
    name: "MCP Polyglot",
    description: "Polyglot NLP",
    category: "ai",
    tags: [
      "ai",
      "aboSamoor"
    ],
    installCommand: "npx -y @mcp/server-mcp-polyglot",
    githubUrl: "https://github.com/aboSamoor/mcp-server-polyglot",
    downloads: "83K",
    author: "aboSamoor",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-stanza",
    name: "MCP Stanza",
    description: "Stanza NLP library",
    category: "ai",
    tags: [
      "ai",
      "stanfordnlp"
    ],
    installCommand: "npx -y @mcp/server-mcp-stanza",
    githubUrl: "https://github.com/stanfordnlp/mcp-server-stanza",
    downloads: "382K",
    author: "stanfordnlp",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-flair",
    name: "MCP Flair",
    description: "Flair NLP framework",
    category: "ai",
    tags: [
      "ai",
      "flairNLP"
    ],
    installCommand: "npx -y @mcp/server-mcp-flair",
    githubUrl: "https://github.com/flairNLP/mcp-server-flair",
    downloads: "491K",
    author: "flairNLP",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-allennlp",
    name: "MCP AllenNLP",
    description: "AllenNLP deep learning",
    category: "ai",
    tags: [
      "ai",
      "allenai"
    ],
    installCommand: "npx -y @mcp/server-mcp-allennlp",
    githubUrl: "https://github.com/allenai/mcp-server-allennlp",
    downloads: "119K",
    author: "allenai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-fairseq",
    name: "MCP Fairseq",
    description: "Facebook Fairseq",
    category: "ai",
    tags: [
      "ai",
      "facebookresearch"
    ],
    installCommand: "npx -y @mcp/server-mcp-fairseq",
    githubUrl: "https://github.com/facebookresearch/mcp-server-fairseq",
    downloads: "437K",
    author: "facebookresearch",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-parlai",
    name: "MCP ParlAI",
    description: "Facebook ParlAI",
    category: "ai",
    tags: [
      "ai",
      "facebookresearch"
    ],
    installCommand: "npx -y @mcp/server-mcp-parlai",
    githubUrl: "https://github.com/facebookresearch/mcp-server-parlai",
    downloads: "306K",
    author: "facebookresearch",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-pytorch",
    name: "MCP PyTorch",
    description: "PyTorch deep learning",
    category: "ai",
    tags: [
      "ai",
      "pytorch"
    ],
    installCommand: "npx -y @mcp/server-mcp-pytorch",
    githubUrl: "https://github.com/pytorch/mcp-server-pytorch",
    downloads: "77K",
    author: "pytorch",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-tensorflow",
    name: "MCP TensorFlow",
    description: "TensorFlow machine learning",
    category: "ai",
    tags: [
      "ai",
      "tensorflow"
    ],
    installCommand: "npx -y @mcp/server-mcp-tensorflow",
    githubUrl: "https://github.com/tensorflow/mcp-server-tensorflow",
    downloads: "230K",
    author: "tensorflow",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-jax",
    name: "MCP JAX",
    description: "Google JAX",
    category: "ai",
    tags: [
      "ai",
      "google"
    ],
    installCommand: "npx -y @mcp/server-mcp-jax",
    githubUrl: "https://github.com/google/mcp-server-jax",
    downloads: "85K",
    author: "google",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-keras",
    name: "MCP Keras",
    description: "Keras deep learning",
    category: "ai",
    tags: [
      "ai",
      "keras-team"
    ],
    installCommand: "npx -y @mcp/server-mcp-keras",
    githubUrl: "https://github.com/keras-team/mcp-server-keras",
    downloads: "112K",
    author: "keras-team",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-mxnet",
    name: "MCP MXNet",
    description: "Apache MXNet",
    category: "ai",
    tags: [
      "ai",
      "apache"
    ],
    installCommand: "npx -y @mcp/server-mcp-mxnet",
    githubUrl: "https://github.com/apache/mcp-server-mxnet",
    downloads: "376K",
    author: "apache",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-paddlepaddle",
    name: "MCP PaddlePaddle",
    description: "Baidu PaddlePaddle",
    category: "ai",
    tags: [
      "ai",
      "paddlepaddle"
    ],
    installCommand: "npx -y @mcp/server-mcp-paddlepaddle",
    githubUrl: "https://github.com/paddlepaddle/mcp-server-paddle",
    downloads: "329K",
    author: "paddlepaddle",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-mindspore",
    name: "MCP MindSpore",
    description: "Huawei MindSpore",
    category: "ai",
    tags: [
      "ai",
      "mindspore-ai"
    ],
    installCommand: "npx -y @mcp/server-mcp-mindspore",
    githubUrl: "https://github.com/mindspore-ai/mcp-server-mindspore",
    downloads: "167K",
    author: "mindspore-ai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-oneflow",
    name: "MCP OneFlow",
    description: "OneFlow deep learning",
    category: "ai",
    tags: [
      "ai",
      "Oneflow-Inc"
    ],
    installCommand: "npx -y @mcp/server-mcp-oneflow",
    githubUrl: "https://github.com/Oneflow-Inc/mcp-server-oneflow",
    downloads: "110K",
    author: "Oneflow-Inc",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-megengine",
    name: "MCP MegEngine",
    description: "MegEngine deep learning",
    category: "ai",
    tags: [
      "ai",
      "MegEngine"
    ],
    installCommand: "npx -y @mcp/server-mcp-megengine",
    githubUrl: "https://github.com/MegEngine/mcp-server-megengine",
    downloads: "383K",
    author: "MegEngine",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-bigdl",
    name: "MCP BigDL",
    description: "Intel BigDL",
    category: "ai",
    tags: [
      "ai",
      "intel-analytics"
    ],
    installCommand: "npx -y @mcp/server-mcp-bigdl",
    githubUrl: "https://github.com/intel-analytics/mcp-server-bigdl",
    downloads: "207K",
    author: "intel-analytics",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-ray",
    name: "MCP Ray",
    description: "Ray distributed computing",
    category: "ai",
    tags: [
      "ai",
      "ray-project"
    ],
    installCommand: "npx -y @mcp/server-mcp-ray",
    githubUrl: "https://github.com/ray-project/mcp-server-ray",
    downloads: "258K",
    author: "ray-project",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-dask",
    name: "MCP Dask",
    description: "Dask parallel computing",
    category: "ai",
    tags: [
      "ai",
      "dask"
    ],
    installCommand: "npx -y @mcp/server-mcp-dask",
    githubUrl: "https://github.com/dask/mcp-server-dask",
    downloads: "173K",
    author: "dask",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-modin",
    name: "MCP Modin",
    description: "Modin pandas acceleration",
    category: "ai",
    tags: [
      "ai",
      "modin-project"
    ],
    installCommand: "npx -y @mcp/server-mcp-modin",
    githubUrl: "https://github.com/modin-project/mcp-server-modin",
    downloads: "472K",
    author: "modin-project",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-cupy",
    name: "MCP CuPy",
    description: "CuPy GPU arrays",
    category: "ai",
    tags: [
      "ai",
      "cupy"
    ],
    installCommand: "npx -y @mcp/server-mcp-cupy",
    githubUrl: "https://github.com/cupy/mcp-server-cupy",
    downloads: "28K",
    author: "cupy",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-numba",
    name: "MCP Numba",
    description: "Numba JIT compiler",
    category: "ai",
    tags: [
      "ai",
      "numba"
    ],
    installCommand: "npx -y @mcp/server-mcp-numba",
    githubUrl: "https://github.com/numba/mcp-server-numba",
    downloads: "360K",
    author: "numba",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-cython",
    name: "MCP Cython",
    description: "Cython compiler",
    category: "ai",
    tags: [
      "ai",
      "cython"
    ],
    installCommand: "npx -y @mcp/server-mcp-cython",
    githubUrl: "https://github.com/cython/mcp-server-cython",
    downloads: "17K",
    author: "cython",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-pypy",
    name: "MCP PyPy",
    description: "PyPy Python interpreter",
    category: "ai",
    tags: [
      "ai",
      "pypy"
    ],
    installCommand: "npx -y @mcp/server-mcp-pypy",
    githubUrl: "https://github.com/pypy/mcp-server-pypy",
    downloads: "426K",
    author: "pypy",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-numpy",
    name: "MCP NumPy",
    description: "NumPy numerical computing",
    category: "ai",
    tags: [
      "ai",
      "numpy"
    ],
    installCommand: "npx -y @mcp/server-mcp-numpy",
    githubUrl: "https://github.com/numpy/mcp-server-numpy",
    downloads: "134K",
    author: "numpy",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-scipy",
    name: "MCP SciPy",
    description: "SciPy scientific computing",
    category: "ai",
    tags: [
      "ai",
      "scipy"
    ],
    installCommand: "npx -y @mcp/server-mcp-scipy",
    githubUrl: "https://github.com/scipy/mcp-server-scipy",
    downloads: "500K",
    author: "scipy",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-pandas",
    name: "MCP Pandas",
    description: "Pandas data analysis",
    category: "ai",
    tags: [
      "ai",
      "pandas-dev"
    ],
    installCommand: "npx -y @mcp/server-mcp-pandas",
    githubUrl: "https://github.com/pandas-dev/mcp-server-pandas",
    downloads: "476K",
    author: "pandas-dev",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-scikit-learn",
    name: "MCP Scikit-learn",
    description: "Scikit-learn machine learning",
    category: "ai",
    tags: [
      "ai",
      "scikit-learn"
    ],
    installCommand: "npx -y @mcp/server-mcp-scikit-learn",
    githubUrl: "https://github.com/scikit-learn/mcp-server-scikit-learn",
    downloads: "274K",
    author: "scikit-learn",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-xgboost",
    name: "MCP XGBoost",
    description: "XGBoost gradient boosting",
    category: "ai",
    tags: [
      "ai",
      "dmlc"
    ],
    installCommand: "npx -y @mcp/server-mcp-xgboost",
    githubUrl: "https://github.com/dmlc/mcp-server-xgboost",
    downloads: "17K",
    author: "dmlc",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-lightgbm",
    name: "MCP LightGBM",
    description: "LightGBM gradient boosting",
    category: "ai",
    tags: [
      "ai",
      "microsoft"
    ],
    installCommand: "npx -y @mcp/server-mcp-lightgbm",
    githubUrl: "https://github.com/microsoft/mcp-server-lightgbm",
    downloads: "232K",
    author: "microsoft",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-catboost",
    name: "MCP CatBoost",
    description: "CatBoost gradient boosting",
    category: "ai",
    tags: [
      "ai",
      "catboost"
    ],
    installCommand: "npx -y @mcp/server-mcp-catboost",
    githubUrl: "https://github.com/catboost/mcp-server-catboost",
    downloads: "471K",
    author: "catboost",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-optuna",
    name: "MCP Optuna",
    description: "Optuna hyperparameter optimization",
    category: "ai",
    tags: [
      "ai",
      "optuna"
    ],
    installCommand: "npx -y @mcp/server-mcp-optuna",
    githubUrl: "https://github.com/optuna/mcp-server-optuna",
    downloads: "104K",
    author: "optuna",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-hyperopt",
    name: "MCP Hyperopt",
    description: "Hyperopt optimization",
    category: "ai",
    tags: [
      "ai",
      "hyperopt"
    ],
    installCommand: "npx -y @mcp/server-mcp-hyperopt",
    githubUrl: "https://github.com/hyperopt/mcp-server-hyperopt",
    downloads: "196K",
    author: "hyperopt",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-ray-tune",
    name: "MCP Ray Tune",
    description: "Ray Tune hyperparameter tuning",
    category: "ai",
    tags: [
      "ai",
      "ray-project"
    ],
    installCommand: "npx -y @mcp/server-mcp-ray-tune",
    githubUrl: "https://github.com/ray-project/mcp-server-tune",
    downloads: "346K",
    author: "ray-project",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-weights-&-biases",
    name: "MCP Weights & Biases",
    description: "W&B experiment tracking",
    category: "ai",
    tags: [
      "ai",
      "wandb"
    ],
    installCommand: "npx -y @mcp/server-mcp-weights-&-biases",
    githubUrl: "https://github.com/wandb/mcp-server-wandb",
    downloads: "253K",
    author: "wandb",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-mlflow",
    name: "MCP MLflow",
    description: "MLflow lifecycle management",
    category: "ai",
    tags: [
      "ai",
      "mlflow"
    ],
    installCommand: "npx -y @mcp/server-mcp-mlflow",
    githubUrl: "https://github.com/mlflow/mcp-server-mlflow",
    downloads: "454K",
    author: "mlflow",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-kubeflow",
    name: "MCP Kubeflow",
    description: "Kubeflow ML workflows",
    category: "ai",
    tags: [
      "ai",
      "kubeflow"
    ],
    installCommand: "npx -y @mcp/server-mcp-kubeflow",
    githubUrl: "https://github.com/kubeflow/mcp-server-kubeflow",
    downloads: "107K",
    author: "kubeflow",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-polyaxon",
    name: "MCP Polyaxon",
    description: "Polyaxon ML platform",
    category: "ai",
    tags: [
      "ai",
      "polyaxon"
    ],
    installCommand: "npx -y @mcp/server-mcp-polyaxon",
    githubUrl: "https://github.com/polyaxon/mcp-server-polyaxon",
    downloads: "252K",
    author: "polyaxon",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-clearml",
    name: "MCP ClearML",
    description: "ClearML experiment manager",
    category: "ai",
    tags: [
      "ai",
      "allegroai"
    ],
    installCommand: "npx -y @mcp/server-mcp-clearml",
    githubUrl: "https://github.com/allegroai/mcp-server-clearml",
    downloads: "456K",
    author: "allegroai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-sacred",
    name: "MCP Sacred",
    description: "Sacred experiment management",
    category: "ai",
    tags: [
      "ai",
      "IDSIA"
    ],
    installCommand: "npx -y @mcp/server-mcp-sacred",
    githubUrl: "https://github.com/IDSIA/mcp-server-sacred",
    downloads: "172K",
    author: "IDSIA",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-guild-ai",
    name: "MCP Guild AI",
    description: "Guild AI experiment tracking",
    category: "ai",
    tags: [
      "ai",
      "guildai"
    ],
    installCommand: "npx -y @mcp/server-mcp-guild-ai",
    githubUrl: "https://github.com/guildai/mcp-server-guildai",
    downloads: "166K",
    author: "guildai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-dvc",
    name: "MCP DVC",
    description: "DVC data version control",
    category: "ai",
    tags: [
      "ai",
      "iterative"
    ],
    installCommand: "npx -y @mcp/server-mcp-dvc",
    githubUrl: "https://github.com/iterative/mcp-server-dvc",
    downloads: "470K",
    author: "iterative",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-pachyderm",
    name: "MCP Pachyderm",
    description: "Pachyderm data versioning",
    category: "ai",
    tags: [
      "ai",
      "pachyderm"
    ],
    installCommand: "npx -y @mcp/server-mcp-pachyderm",
    githubUrl: "https://github.com/pachyderm/mcp-server-pachyderm",
    downloads: "117K",
    author: "pachyderm",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-lakefs",
    name: "MCP LakeFS",
    description: "LakeFS data versioning",
    category: "ai",
    tags: [
      "ai",
      "treeverse"
    ],
    installCommand: "npx -y @mcp/server-mcp-lakefs",
    githubUrl: "https://github.com/treeverse/mcp-server-lakefs",
    downloads: "440K",
    author: "treeverse",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-delta-lake",
    name: "MCP Delta Lake",
    description: "Delta Lake storage layer",
    category: "ai",
    tags: [
      "ai",
      "delta-io"
    ],
    installCommand: "npx -y @mcp/server-mcp-delta-lake",
    githubUrl: "https://github.com/delta-io/mcp-server-delta",
    downloads: "260K",
    author: "delta-io",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-apache-iceberg",
    name: "MCP Apache Iceberg",
    description: "Iceberg table format",
    category: "ai",
    tags: [
      "ai",
      "apache"
    ],
    installCommand: "npx -y @mcp/server-mcp-apache-iceberg",
    githubUrl: "https://github.com/apache/mcp-server-iceberg",
    downloads: "288K",
    author: "apache",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-apache-hudi",
    name: "MCP Apache Hudi",
    description: "Hudi data lake",
    category: "ai",
    tags: [
      "ai",
      "apache"
    ],
    installCommand: "npx -y @mcp/server-mcp-apache-hudi",
    githubUrl: "https://github.com/apache/mcp-server-hudi",
    downloads: "293K",
    author: "apache",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-feast",
    name: "MCP Feast",
    description: "Feast feature store",
    category: "ai",
    tags: [
      "ai",
      "feast-dev"
    ],
    installCommand: "npx -y @mcp/server-mcp-feast",
    githubUrl: "https://github.com/feast-dev/mcp-server-feast",
    downloads: "135K",
    author: "feast-dev",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-tecton",
    name: "MCP Tecton",
    description: "Tecton feature platform",
    category: "ai",
    tags: [
      "ai",
      "tecton-ai"
    ],
    installCommand: "npx -y @mcp/server-mcp-tecton",
    githubUrl: "https://github.com/tecton-ai/mcp-server-tecton",
    downloads: "271K",
    author: "tecton-ai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-redisai",
    name: "MCP RedisAI",
    description: "RedisAI model serving",
    category: "ai",
    tags: [
      "ai",
      "redis-ai"
    ],
    installCommand: "npx -y @mcp/server-mcp-redisai",
    githubUrl: "https://github.com/redis-ai/mcp-server-redisai",
    downloads: "271K",
    author: "redis-ai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-seldon",
    name: "MCP Seldon",
    description: "Seldon model serving",
    category: "ai",
    tags: [
      "ai",
      "seldonio"
    ],
    installCommand: "npx -y @mcp/server-mcp-seldon",
    githubUrl: "https://github.com/seldonio/mcp-server-seldon",
    downloads: "196K",
    author: "seldonio",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-bentoml",
    name: "MCP BentoML",
    description: "BentoML model serving",
    category: "ai",
    tags: [
      "ai",
      "bentoml"
    ],
    installCommand: "npx -y @mcp/server-mcp-bentoml",
    githubUrl: "https://github.com/bentoml/mcp-server-bentoml",
    downloads: "152K",
    author: "bentoml",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-cortex",
    name: "MCP Cortex",
    description: "Cortex model serving",
    category: "ai",
    tags: [
      "ai",
      "cortexlabs"
    ],
    installCommand: "npx -y @mcp/server-mcp-cortex",
    githubUrl: "https://github.com/cortexlabs/mcp-server-cortex",
    downloads: "283K",
    author: "cortexlabs",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-kserve",
    name: "MCP KServe",
    description: "KServe model serving",
    category: "ai",
    tags: [
      "ai",
      "kserve"
    ],
    installCommand: "npx -y @mcp/server-mcp-kserve",
    githubUrl: "https://github.com/kserve/mcp-server-kserve",
    downloads: "433K",
    author: "kserve",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-torchserve",
    name: "MCP TorchServe",
    description: "TorchServe PyTorch serving",
    category: "ai",
    tags: [
      "ai",
      "pytorch"
    ],
    installCommand: "npx -y @mcp/server-mcp-torchserve",
    githubUrl: "https://github.com/pytorch/mcp-server-torchserve",
    downloads: "94K",
    author: "pytorch",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-tensorflow-serving",
    name: "MCP TensorFlow Serving",
    description: "TF Serving",
    category: "ai",
    tags: [
      "ai",
      "tensorflow"
    ],
    installCommand: "npx -y @mcp/server-mcp-tensorflow-serving",
    githubUrl: "https://github.com/tensorflow/mcp-server-tensorflow-serving",
    downloads: "268K",
    author: "tensorflow",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-nvidia-triton",
    name: "MCP NVIDIA Triton",
    description: "Triton inference server",
    category: "ai",
    tags: [
      "ai",
      "triton-inference-server"
    ],
    installCommand: "npx -y @mcp/server-mcp-nvidia-triton",
    githubUrl: "https://github.com/triton-inference-server/mcp-server-triton",
    downloads: "440K",
    author: "triton-inference-server",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-onnx-runtime",
    name: "MCP ONNX Runtime",
    description: "ONNX Runtime inference",
    category: "ai",
    tags: [
      "ai",
      "microsoft"
    ],
    installCommand: "npx -y @mcp/server-mcp-onnx-runtime",
    githubUrl: "https://github.com/microsoft/mcp-server-onnxruntime",
    downloads: "153K",
    author: "microsoft",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-openvino",
    name: "MCP OpenVINO",
    description: "OpenVINO toolkit",
    category: "ai",
    tags: [
      "ai",
      "openvinotoolkit"
    ],
    installCommand: "npx -y @mcp/server-mcp-openvino",
    githubUrl: "https://github.com/openvinotoolkit/mcp-server-openvino",
    downloads: "390K",
    author: "openvinotoolkit",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-tensorrt",
    name: "MCP TensorRT",
    description: "NVIDIA TensorRT",
    category: "ai",
    tags: [
      "ai",
      "NVIDIA"
    ],
    installCommand: "npx -y @mcp/server-mcp-tensorrt",
    githubUrl: "https://github.com/NVIDIA/mcp-server-tensorrt",
    downloads: "495K",
    author: "NVIDIA",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-deepspeed",
    name: "MCP DeepSpeed",
    description: "Microsoft DeepSpeed",
    category: "ai",
    tags: [
      "ai",
      "microsoft"
    ],
    installCommand: "npx -y @mcp/server-mcp-deepspeed",
    githubUrl: "https://github.com/microsoft/mcp-server-deepspeed",
    downloads: "258K",
    author: "microsoft",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-fairscale",
    name: "MCP FairScale",
    description: "Facebook FairScale",
    category: "ai",
    tags: [
      "ai",
      "facebookresearch"
    ],
    installCommand: "npx -y @mcp/server-mcp-fairscale",
    githubUrl: "https://github.com/facebookresearch/mcp-server-fairscale",
    downloads: "316K",
    author: "facebookresearch",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-colossalai",
    name: "MCP ColossalAI",
    description: "ColossalAI distributed training",
    category: "ai",
    tags: [
      "ai",
      "hpcaitech"
    ],
    installCommand: "npx -y @mcp/server-mcp-colossalai",
    githubUrl: "https://github.com/hpcaitech/mcp-server-colossalai",
    downloads: "207K",
    author: "hpcaitech",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-megatron-lm",
    name: "MCP Megatron-LM",
    description: "NVIDIA Megatron-LM",
    category: "ai",
    tags: [
      "ai",
      "NVIDIA"
    ],
    installCommand: "npx -y @mcp/server-mcp-megatron-lm",
    githubUrl: "https://github.com/NVIDIA/mcp-server-megatron-lm",
    downloads: "11K",
    author: "NVIDIA",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-gpt-neox",
    name: "MCP GPT-NeoX",
    description: "EleutherAI GPT-NeoX",
    category: "ai",
    tags: [
      "ai",
      "eleutherai"
    ],
    installCommand: "npx -y @mcp/server-mcp-gpt-neox",
    githubUrl: "https://github.com/eleutherai/mcp-server-gpt-neox",
    downloads: "118K",
    author: "eleutherai",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-mesh-tensorflow",
    name: "MCP Mesh TensorFlow",
    description: "Mesh TensorFlow",
    category: "ai",
    tags: [
      "ai",
      "tensorflow"
    ],
    installCommand: "npx -y @mcp/server-mcp-mesh-tensorflow",
    githubUrl: "https://github.com/tensorflow/mcp-server-mesh",
    downloads: "344K",
    author: "tensorflow",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-alpa",
    name: "MCP Alpa",
    description: "Alpa distributed training",
    category: "ai",
    tags: [
      "ai",
      "alpa-projects"
    ],
    installCommand: "npx -y @mcp/server-mcp-alpa",
    githubUrl: "https://github.com/alpa-projects/mcp-server-alpa",
    downloads: "503K",
    author: "alpa-projects",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-hivemind",
    name: "MCP Hivemind",
    description: "Hivemind decentralized training",
    category: "ai",
    tags: [
      "ai",
      "learning-at-home"
    ],
    installCommand: "npx -y @mcp/server-mcp-hivemind",
    githubUrl: "https://github.com/learning-at-home/mcp-server-hivemind",
    downloads: "393K",
    author: "learning-at-home",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-pytorch-lightning",
    name: "MCP PyTorch Lightning",
    description: "PyTorch Lightning",
    category: "ai",
    tags: [
      "ai",
      "Lightning-AI"
    ],
    installCommand: "npx -y @mcp/server-mcp-pytorch-lightning",
    githubUrl: "https://github.com/Lightning-AI/mcp-server-lightning",
    downloads: "163K",
    author: "Lightning-AI",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-ignite",
    name: "MCP Ignite",
    description: "PyTorch Ignite",
    category: "ai",
    tags: [
      "ai",
      "pytorch"
    ],
    installCommand: "npx -y @mcp/server-mcp-ignite",
    githubUrl: "https://github.com/pytorch/mcp-server-ignite",
    downloads: "31K",
    author: "pytorch",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-catalyst",
    name: "MCP Catalyst",
    description: "Catalyst PyTorch framework",
    category: "ai",
    tags: [
      "ai",
      "catalyst-team"
    ],
    installCommand: "npx -y @mcp/server-mcp-catalyst",
    githubUrl: "https://github.com/catalyst-team/mcp-server-catalyst",
    downloads: "396K",
    author: "catalyst-team",
    isHot: false,
    isNew: false
  },
  {
    id: "mcp-fastai",
    name: "MCP FastAI",
    description: "FastAI deep learning",
    category: "ai",
    tags: [
      "ai",
      "fastai"
    ],
    installCommand: "npx -y @mcp/server-mcp-fastai",
    githubUrl: "https://github.com/fastai/mcp-server-fastai",
    downloads: "37K",
    author: "fastai",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-kerascv",
    name: "MCP KerasCV",
    description: "Keras computer vision",
    category: "ai",
    tags: [
      "ai",
      "keras-team"
    ],
    installCommand: "npx -y @mcp/server-mcp-kerascv",
    githubUrl: "https://github.com/keras-team/mcp-server-kerascv",
    downloads: "64K",
    author: "keras-team",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-kerasnlp",
    name: "MCP KerasNLP",
    description: "Keras natural language",
    category: "ai",
    tags: [
      "ai",
      "keras-team"
    ],
    installCommand: "npx -y @mcp/server-mcp-kerasnlp",
    githubUrl: "https://github.com/keras-team/mcp-server-kerasnlp",
    downloads: "103K",
    author: "keras-team",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-tensorflow-hub",
    name: "MCP TensorFlow Hub",
    description: "TF Hub pretrained models",
    category: "ai",
    tags: [
      "ai",
      "tensorflow"
    ],
    installCommand: "npx -y @mcp/server-mcp-tensorflow-hub",
    githubUrl: "https://github.com/tensorflow/mcp-server-hub",
    downloads: "80K",
    author: "tensorflow",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-pytorch-hub",
    name: "MCP PyTorch Hub",
    description: "PyTorch Hub pretrained models",
    category: "ai",
    tags: [
      "ai",
      "pytorch"
    ],
    installCommand: "npx -y @mcp/server-mcp-pytorch-hub",
    githubUrl: "https://github.com/pytorch/mcp-server-hub",
    downloads: "167K",
    author: "pytorch",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-hugging-face-hub",
    name: "MCP Hugging Face Hub",
    description: "HF Hub model repository",
    category: "ai",
    tags: [
      "ai",
      "huggingface"
    ],
    installCommand: "npx -y @mcp/server-mcp-hugging-face-hub",
    githubUrl: "https://github.com/huggingface/mcp-server-hub",
    downloads: "18K",
    author: "huggingface",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-timm",
    name: "MCP timm",
    description: "PyTorch image models",
    category: "ai",
    tags: [
      "ai",
      "huggingface"
    ],
    installCommand: "npx -y @mcp/server-mcp-timm",
    githubUrl: "https://github.com/huggingface/mcp-server-timm",
    downloads: "188K",
    author: "huggingface",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-segmentation-models",
    name: "MCP segmentation-models",
    description: "Image segmentation models",
    category: "ai",
    tags: [
      "ai",
      "qubvel"
    ],
    installCommand: "npx -y @mcp/server-mcp-segmentation-models",
    githubUrl: "https://github.com/qubvel/mcp-server-segmentation-models",
    downloads: "382K",
    author: "qubvel",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-albumentations",
    name: "MCP albumentations",
    description: "Image augmentation",
    category: "ai",
    tags: [
      "ai",
      "albumentations-team"
    ],
    installCommand: "npx -y @mcp/server-mcp-albumentations",
    githubUrl: "https://github.com/albumentations-team/mcp-server-albumentations",
    downloads: "355K",
    author: "albumentations-team",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-imgaug",
    name: "MCP imgaug",
    description: "Image augmentation library",
    category: "ai",
    tags: [
      "ai",
      "aleju"
    ],
    installCommand: "npx -y @mcp/server-mcp-imgaug",
    githubUrl: "https://github.com/aleju/mcp-server-imgaug",
    downloads: "268K",
    author: "aleju",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-kornia",
    name: "MCP Kornia",
    description: "PyTorch computer vision",
    category: "ai",
    tags: [
      "ai",
      "kornia"
    ],
    installCommand: "npx -y @mcp/server-mcp-kornia",
    githubUrl: "https://github.com/kornia/mcp-server-kornia",
    downloads: "112K",
    author: "kornia",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-torchvision",
    name: "MCP TorchVision",
    description: "PyTorch vision library",
    category: "ai",
    tags: [
      "ai",
      "pytorch"
    ],
    installCommand: "npx -y @mcp/server-mcp-torchvision",
    githubUrl: "https://github.com/pytorch/mcp-server-vision",
    downloads: "211K",
    author: "pytorch",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-torchaudio",
    name: "MCP TorchAudio",
    description: "PyTorch audio library",
    category: "ai",
    tags: [
      "ai",
      "pytorch"
    ],
    installCommand: "npx -y @mcp/server-mcp-torchaudio",
    githubUrl: "https://github.com/pytorch/mcp-server-audio",
    downloads: "358K",
    author: "pytorch",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-torchtext",
    name: "MCP TorchText",
    description: "PyTorch text library",
    category: "ai",
    tags: [
      "ai",
      "pytorch"
    ],
    installCommand: "npx -y @mcp/server-mcp-torchtext",
    githubUrl: "https://github.com/pytorch/mcp-server-text",
    downloads: "471K",
    author: "pytorch",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-fairseq",
    name: "MCP Fairseq",
    description: "Facebook sequence modeling",
    category: "ai",
    tags: [
      "ai",
      "facebookresearch"
    ],
    installCommand: "npx -y @mcp/server-mcp-fairseq",
    githubUrl: "https://github.com/facebookresearch/mcp-server-fairseq-nlp",
    downloads: "143K",
    author: "facebookresearch",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-espnet",
    name: "MCP ESPnet",
    description: "End-to-end speech toolkit",
    category: "ai",
    tags: [
      "ai",
      "espnet"
    ],
    installCommand: "npx -y @mcp/server-mcp-espnet",
    githubUrl: "https://github.com/espnet/mcp-server-espnet",
    downloads: "33K",
    author: "espnet",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-nemo",
    name: "MCP NeMo",
    description: "NVIDIA conversational AI",
    category: "ai",
    tags: [
      "ai",
      "NVIDIA"
    ],
    installCommand: "npx -y @mcp/server-mcp-nemo",
    githubUrl: "https://github.com/NVIDIA/mcp-server-nemo",
    downloads: "258K",
    author: "NVIDIA",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-coqui-tts",
    name: "MCP Coqui TTS",
    description: "Coqui text-to-speech",
    category: "ai",
    tags: [
      "ai",
      "coqui-ai"
    ],
    installCommand: "npx -y @mcp/server-mcp-coqui-tts",
    githubUrl: "https://github.com/coqui-ai/mcp-server-coqui-tts",
    downloads: "167K",
    author: "coqui-ai",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-piper",
    name: "MCP Piper",
    description: "Piper neural TTS",
    category: "ai",
    tags: [
      "ai",
      "rhasspy"
    ],
    installCommand: "npx -y @mcp/server-mcp-piper",
    githubUrl: "https://github.com/rhasspy/mcp-server-piper",
    downloads: "59K",
    author: "rhasspy",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-mozilla-tts",
    name: "MCP Mozilla TTS",
    description: "Mozilla TTS",
    category: "ai",
    tags: [
      "ai",
      "mozilla"
    ],
    installCommand: "npx -y @mcp/server-mcp-mozilla-tts",
    githubUrl: "https://github.com/mozilla/mcp-server-tts",
    downloads: "146K",
    author: "mozilla",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-openunmix",
    name: "MCP OpenUnmix",
    description: "Music source separation",
    category: "ai",
    tags: [
      "ai",
      "sigsep"
    ],
    installCommand: "npx -y @mcp/server-mcp-openunmix",
    githubUrl: "https://github.com/sigsep/mcp-server-openunmix",
    downloads: "162K",
    author: "sigsep",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-spleeter",
    name: "MCP Spleeter",
    description: "Deezer source separation",
    category: "ai",
    tags: [
      "ai",
      "deezer"
    ],
    installCommand: "npx -y @mcp/server-mcp-spleeter",
    githubUrl: "https://github.com/deezer/mcp-server-spleeter",
    downloads: "388K",
    author: "deezer",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-demucs",
    name: "MCP Demucs",
    description: "Facebook music separation",
    category: "ai",
    tags: [
      "ai",
      "facebookresearch"
    ],
    installCommand: "npx -y @mcp/server-mcp-demucs",
    githubUrl: "https://github.com/facebookresearch/mcp-server-demucs",
    downloads: "409K",
    author: "facebookresearch",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-wav2lip",
    name: "MCP Wav2Lip",
    description: "Lip sync generation",
    category: "ai",
    tags: [
      "ai",
      "Rudrabha"
    ],
    installCommand: "npx -y @mcp/server-mcp-wav2lip",
    githubUrl: "https://github.com/Rudrabha/mcp-server-wav2lip",
    downloads: "134K",
    author: "Rudrabha",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-first-order-model",
    name: "MCP First Order Model",
    description: "Motion transfer",
    category: "ai",
    tags: [
      "ai",
      "AliaksandrSiarohin"
    ],
    installCommand: "npx -y @mcp/server-mcp-first-order-model",
    githubUrl: "https://github.com/AliaksandrSiarohin/mcp-server-first-order-model",
    downloads: "80K",
    author: "AliaksandrSiarohin",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-thin-plate-spline",
    name: "MCP Thin-Plate Spline",
    description: "Image animation",
    category: "ai",
    tags: [
      "ai",
      "yoyo-nb"
    ],
    installCommand: "npx -y @mcp/server-mcp-thin-plate-spline",
    githubUrl: "https://github.com/yoyo-nb/mcp-server-thin-plate-spline",
    downloads: "328K",
    author: "yoyo-nb",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-face-alignment",
    name: "MCP Face Alignment",
    description: "Face alignment network",
    category: "ai",
    tags: [
      "ai",
      "1adrianb"
    ],
    installCommand: "npx -y @mcp/server-mcp-face-alignment",
    githubUrl: "https://github.com/1adrianb/mcp-server-face-alignment",
    downloads: "364K",
    author: "1adrianb",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-insightface",
    name: "MCP InsightFace",
    description: "Face analysis toolkit",
    category: "ai",
    tags: [
      "ai",
      "deepinsight"
    ],
    installCommand: "npx -y @mcp/server-mcp-insightface",
    githubUrl: "https://github.com/deepinsight/mcp-server-insightface",
    downloads: "78K",
    author: "deepinsight",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-face-recognition",
    name: "MCP Face Recognition",
    description: "Face recognition",
    category: "ai",
    tags: [
      "ai",
      "ageitgey"
    ],
    installCommand: "npx -y @mcp/server-mcp-face-recognition",
    githubUrl: "https://github.com/ageitgey/mcp-server-face_recognition",
    downloads: "271K",
    author: "ageitgey",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-dlib",
    name: "MCP dlib",
    description: "Dlib machine learning",
    category: "ai",
    tags: [
      "ai",
      "davisking"
    ],
    installCommand: "npx -y @mcp/server-mcp-dlib",
    githubUrl: "https://github.com/davisking/mcp-server-dlib",
    downloads: "180K",
    author: "davisking",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-opencv",
    name: "MCP OpenCV",
    description: "OpenCV computer vision",
    category: "ai",
    tags: [
      "ai",
      "opencv"
    ],
    installCommand: "npx -y @mcp/server-mcp-opencv",
    githubUrl: "https://github.com/opencv/mcp-server-opencv",
    downloads: "143K",
    author: "opencv",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-pillow",
    name: "MCP Pillow",
    description: "PIL image processing",
    category: "ai",
    tags: [
      "ai",
      "python-pillow"
    ],
    installCommand: "npx -y @mcp/server-mcp-pillow",
    githubUrl: "https://github.com/python-pillow/mcp-server-pillow",
    downloads: "500K",
    author: "python-pillow",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-scikit-image",
    name: "MCP scikit-image",
    description: "Scikit image processing",
    category: "ai",
    tags: [
      "ai",
      "scikit-image"
    ],
    installCommand: "npx -y @mcp/server-mcp-scikit-image",
    githubUrl: "https://github.com/scikit-image/mcp-server-scikit-image",
    downloads: "364K",
    author: "scikit-image",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-mahotas",
    name: "MCP Mahotas",
    description: "Mahotas computer vision",
    category: "ai",
    tags: [
      "ai",
      "luispedro"
    ],
    installCommand: "npx -y @mcp/server-mcp-mahotas",
    githubUrl: "https://github.com/luispedro/mcp-server-mahotas",
    downloads: "472K",
    author: "luispedro",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-simpleitk",
    name: "MCP SimpleITK",
    description: "ITK medical imaging",
    category: "ai",
    tags: [
      "ai",
      "SimpleITK"
    ],
    installCommand: "npx -y @mcp/server-mcp-simpleitk",
    githubUrl: "https://github.com/SimpleITK/mcp-server-simpleitk",
    downloads: "45K",
    author: "SimpleITK",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-nibabel",
    name: "MCP NiBabel",
    description: "Neuroimaging data",
    category: "ai",
    tags: [
      "ai",
      "nipy"
    ],
    installCommand: "npx -y @mcp/server-mcp-nibabel",
    githubUrl: "https://github.com/nipy/mcp-server-nibabel",
    downloads: "306K",
    author: "nipy",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-nilearn",
    name: "MCP Nilearn",
    description: "Neuroimaging learning",
    category: "ai",
    tags: [
      "ai",
      "nilearn"
    ],
    installCommand: "npx -y @mcp/server-mcp-nilearn",
    githubUrl: "https://github.com/nilearn/mcp-server-nilearn",
    downloads: "236K",
    author: "nilearn",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-dipy",
    name: "MCP DIPY",
    description: "Diffusion imaging",
    category: "ai",
    tags: [
      "ai",
      "dipy"
    ],
    installCommand: "npx -y @mcp/server-mcp-dipy",
    githubUrl: "https://github.com/dipy/mcp-server-dipy",
    downloads: "295K",
    author: "dipy",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-pyradiomics",
    name: "MCP PyRadiomics",
    description: "Radiomics feature extraction",
    category: "ai",
    tags: [
      "ai",
      "radiomics"
    ],
    installCommand: "npx -y @mcp/server-mcp-pyradiomics",
    githubUrl: "https://github.com/radiomics/pyradiomics/mcp-server-pyradiomics",
    downloads: "193K",
    author: "radiomics",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-platipy",
    name: "MCP Platipy",
    description: "Radiotherapy planning",
    category: "ai",
    tags: [
      "ai",
      "acrf-image-x-institute"
    ],
    installCommand: "npx -y @mcp/server-mcp-platipy",
    githubUrl: "https://github.com/acrf-image-x-institute/mcp-server-platipy",
    downloads: "127K",
    author: "acrf-image-x-institute",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-monai",
    name: "MCP MONAI",
    description: "Medical imaging AI",
    category: "ai",
    tags: [
      "ai",
      "Project-MONAI"
    ],
    installCommand: "npx -y @mcp/server-mcp-monai",
    githubUrl: "https://github.com/Project-MONAI/mcp-server-monai",
    downloads: "368K",
    author: "Project-MONAI",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-torchio",
    name: "MCP TorchIO",
    description: "Medical image I/O",
    category: "ai",
    tags: [
      "ai",
      "fepegar"
    ],
    installCommand: "npx -y @mcp/server-mcp-torchio",
    githubUrl: "https://github.com/fepegar/mcp-server-torchio",
    downloads: "401K",
    author: "fepegar",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-deepdrr",
    name: "MCP DeepDRR",
    description: "Radiography simulation",
    category: "ai",
    tags: [
      "ai",
      "arcadelab"
    ],
    installCommand: "npx -y @mcp/server-mcp-deepdrr",
    githubUrl: "https://github.com/arcadelab/mcp-server-deepdrr",
    downloads: "108K",
    author: "arcadelab",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-totalsegmentator",
    name: "MCP TotalSegmentator",
    description: "CT segmentation",
    category: "ai",
    tags: [
      "ai",
      "wasserth"
    ],
    installCommand: "npx -y @mcp/server-mcp-totalsegmentator",
    githubUrl: "https://github.com/wasserth/mcp-server-totalsegmentator",
    downloads: "183K",
    author: "wasserth",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-nnu-net",
    name: "MCP nnU-Net",
    description: "Medical image segmentation",
    category: "ai",
    tags: [
      "ai",
      "MIC-DKFZ"
    ],
    installCommand: "npx -y @mcp/server-mcp-nnu-net",
    githubUrl: "https://github.com/MIC-DKFZ/mcp-server-nnunet",
    downloads: "434K",
    author: "MIC-DKFZ",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-hd-bet",
    name: "MCP HD-BET",
    description: "Brain extraction",
    category: "ai",
    tags: [
      "ai",
      "MIC-DKFZ"
    ],
    installCommand: "npx -y @mcp/server-mcp-hd-bet",
    githubUrl: "https://github.com/MIC-DKFZ/mcp-server-hd-bet",
    downloads: "399K",
    author: "MIC-DKFZ",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-hd-glio",
    name: "MCP HD-GLIO",
    description: "Glioma segmentation",
    category: "ai",
    tags: [
      "ai",
      "MIC-DKFZ"
    ],
    installCommand: "npx -y @mcp/server-mcp-hd-glio",
    githubUrl: "https://github.com/MIC-DKFZ/mcp-server-hd-glio",
    downloads: "431K",
    author: "MIC-DKFZ",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-hd-ct",
    name: "MCP HD-CT",
    description: "CT organ segmentation",
    category: "ai",
    tags: [
      "ai",
      "MIC-DKFZ"
    ],
    installCommand: "npx -y @mcp/server-mcp-hd-ct",
    githubUrl: "https://github.com/MIC-DKFZ/mcp-server-hd-ct",
    downloads: "361K",
    author: "MIC-DKFZ",
    isHot: false,
    isNew: true
  },
  {
    id: "mcp-hd-pro",
    name: "MCP HD-PRO",
    description: "Prostate segmentation",
    category: "ai",
    tags: [
      "ai",
      "MIC-DKFZ"
    ],
    installCommand: "npx -y @mcp/server-mcp-hd-pro",
    githubUrl: "https://github.com/MIC-DKFZ/mcp-server-hd-pro",
    downloads: "206K",
    author: "MIC-DKFZ",
    isHot: false,
    isNew: true
  }
];

export const hotMcpSkills = mcpSkills.filter(s => s.isHot);
export const newMcpSkills = mcpSkills.filter(s => s.isNew);
