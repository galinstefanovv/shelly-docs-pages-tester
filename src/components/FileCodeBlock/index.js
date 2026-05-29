import CodeBlock from '@theme/CodeBlock';

export default function FileCodeBlock({code, language = 'js', title}) {
  return (
    <CodeBlock language={language} title={title}>
      {code}
    </CodeBlock>
  );
}
