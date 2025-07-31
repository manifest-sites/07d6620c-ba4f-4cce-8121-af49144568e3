import { useState } from 'react'
import { Card, Button, Progress, Typography, Space, Row, Col, Badge, Divider } from 'antd'
import { HeartOutlined, HeartFilled, FrownOutlined, SmileOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

function OctopusApp() {
  const [preference, setPreference] = useState(null)
  const [votes, setVotes] = useState({ octopuses: 42, octopi: 38 })
  const [showFacts, setShowFacts] = useState(false)

  const handleVote = (choice) => {
    if (preference === choice) return
    
    setVotes(prev => ({
      ...prev,
      [choice]: prev[choice] + 1,
      ...(preference && { [preference]: prev[preference] - 1 })
    }))
    setPreference(choice)
  }

  const totalVotes = votes.octopuses + votes.octopi
  const octopusesPercent = Math.round((votes.octopuses / totalVotes) * 100)
  const octopiPercent = Math.round((votes.octopi / totalVotes) * 100)

  const facts = [
    "🐙 Octopuses have three hearts and blue blood",
    "🧠 They are incredibly intelligent and can solve puzzles",
    "🎨 Octopuses can change color and texture to camouflage",
    "💪 Each arm has its own 'brain' with millions of neurons",
    "🏠 They are mostly solitary creatures except when mating",
    "👀 Octopuses have excellent eyesight but are colorblind"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Title level={1} className="text-4xl md:text-6xl mb-4 text-indigo-800">
            🐙 Octopuses vs Octopi 🐙
          </Title>
          <Paragraph className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            The great debate: Which plural form is correct? Join the discussion and learn fascinating facts about these amazing creatures!
          </Paragraph>
        </div>

        <Row gutter={[24, 24]} className="mb-8">
          <Col xs={24} lg={12}>
            <Card 
              className="h-full border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow"
              title={
                <div className="text-center">
                  <Title level={2} className="text-blue-600 mb-2">
                    "Octopuses" 🐙
                  </Title>
                  <Text className="text-gray-600">The scientifically preferred form</Text>
                </div>
              }
            >
              <div className="text-center mb-4">
                <Button
                  type={preference === 'octopuses' ? 'primary' : 'default'}
                  size="large"
                  icon={preference === 'octopuses' ? <HeartFilled /> : <HeartOutlined />}
                  onClick={() => handleVote('octopuses')}
                  className="mb-4"
                >
                  I prefer "Octopuses"
                </Button>
                <div>
                  <Badge count={votes.octopuses} showZero color="blue" />
                  <Progress 
                    percent={octopusesPercent} 
                    strokeColor="#1890ff"
                    className="mt-2"
                  />
                </div>
              </div>
              <Paragraph>
                <strong>Why "Octopuses"?</strong><br/>
                • Standard English pluralization rule<br/>
                • Preferred by marine biologists<br/>
                • Most commonly used in scientific literature<br/>
                • Simple and consistent with English grammar
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card 
              className="h-full border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow"
              title={
                <div className="text-center">
                  <Title level={2} className="text-purple-600 mb-2">
                    "Octopi" 🐙
                  </Title>
                  <Text className="text-gray-600">The classical Latin approach</Text>
                </div>
              }
            >
              <div className="text-center mb-4">
                <Button
                  type={preference === 'octopi' ? 'primary' : 'default'}
                  size="large"
                  icon={preference === 'octopi' ? <HeartFilled /> : <HeartOutlined />}
                  onClick={() => handleVote('octopi')}
                  className="mb-4"
                  style={{ backgroundColor: preference === 'octopi' ? '#722ed1' : undefined }}
                >
                  I prefer "Octopi"
                </Button>
                <div>
                  <Badge count={votes.octopi} showZero color="purple" />
                  <Progress 
                    percent={octopiPercent} 
                    strokeColor="#722ed1"
                    className="mt-2"
                  />
                </div>
              </div>
              <Paragraph>
                <strong>Why "Octopi"?</strong><br/>
                • Follows Latin pluralization (like "cactus" → "cacti")<br/>
                • Sounds more sophisticated<br/>
                • Traditional and classical<br/>
                • Still widely accepted and used
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <Card className="mb-8 border-2 border-green-200 shadow-lg">
          <div className="text-center mb-6">
            <Title level={3} className="text-green-600">
              The Verdict 🏆
            </Title>
            <Paragraph className="text-lg">
              Both forms are acceptable! However, <strong>"octopuses"</strong> is preferred by scientists and dictionaries 
              because "octopus" comes from Greek (not Latin), so the English pluralization makes more sense.
            </Paragraph>
            <Paragraph className="text-md text-gray-600">
              Fun fact: There's also "octopodes" (the Greek plural), but it's rarely used!
            </Paragraph>
          </div>
        </Card>

        <div className="text-center mb-6">
          <Button
            type="primary"
            size="large"
            onClick={() => setShowFacts(!showFacts)}
            icon={showFacts ? <FrownOutlined /> : <SmileOutlined />}
            className="bg-gradient-to-r from-blue-500 to-purple-600 border-0"
          >
            {showFacts ? 'Hide' : 'Show'} Amazing Octopus Facts
          </Button>
        </div>

        {showFacts && (
          <Card className="border-2 border-orange-200 shadow-lg">
            <Title level={3} className="text-center text-orange-600 mb-6">
              🤯 Mind-Blowing Octopus Facts
            </Title>
            <Row gutter={[16, 16]}>
              {facts.map((fact, index) => (
                <Col xs={24} md={12} key={index}>
                  <Card 
                    size="small" 
                    className="h-full bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200"
                  >
                    <Text className="text-sm">{fact}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        )}

        <Divider />
        
        <div className="text-center text-gray-500 text-sm">
          <Text>
            Current community preference: <strong>{octopusesPercent}%</strong> octopuses vs <strong>{octopiPercent}%</strong> octopi
          </Text>
        </div>
      </div>
    </div>
  )
}

export default OctopusApp