import { LayoutWithHeader } from '../Layout';
import { Tabs } from 'antd';
import MoviesContent from './MoviesContent';

const { TabPane } = Tabs;

export default function Dashboard() {

    return (<LayoutWithHeader>
            <Tabs defaultActiveKey="1" onChange={() => {}}>
                <TabPane tab="Tab 1" key="1">
                    <MoviesContent />
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Not implemented yet
                </TabPane>
            </Tabs>
    </LayoutWithHeader>)
}