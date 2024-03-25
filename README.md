# nextjs
## Create project
npx create-next-app@latest
npx create-next-app@13.4 

## Run project
npm run dev

##  Visual Studio Plugins
ES7 React/Redux/GraphQL/React-Native snippets: Provides code snippets so we can easily generate react components
    - using rafce in a new page.tsx will create a reactArrowFunctionExportComponent
    - CMD / CTRL + D to select an element to rename
    - thead>tr>th*2 will generate the table structure for us easily
JavaScript and TypeScript Nightly: Enables typescript@next to power VS Code's built-in JavaScript and TypeScript support
Tailwind CSS IntelliSense: Intelligent Tailwind CSS tooling for VS Code
Prisma: Adds syntax highlighting, formatting, auto-completion, jump-to-definition and linting for .prisma files.

# See Prisma commands - USEFUL
npx prisma

# Init prisma in your project
npx prisma init

# Format prisma schemas
npx prisma format

# Create prisma migration - SQL DB
npx prisma migrate dev

# Generate a random number of bytes in base64
openssl rand -base64 32

# React email - react.email
npx create-email@latest

# Test email templates
email dev -p 3030

# Send Emails 
See https://react.email/docs/integrations/resend