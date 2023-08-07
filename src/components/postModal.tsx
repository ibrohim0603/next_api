import PostProductPage from "@/pages/dashboard/product";
import { MantineProvider } from "@mantine/core";
import { SpotlightProvider } from "@mantine/spotlight";
import { Button, Group } from "@mantine/core";
import { spotlight } from "@mantine/spotlight";
import EditProductPage from "@/pages/dashboard/product/[id]";
// import type { SpotlightAction } from "@mantine/spotlight";

export default function PostModal() {
  function ActionsWrapper({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <PostProductPage />
      </div>
    );
  }

  function SpotlightControl() {
    return (
      <Group position="left">
        <Button
          onClick={spotlight.open}
          style={{
            backgroundColor: "#fed766",
            color: "black",
            fontWeight: 400,
          }}
        >
          Добавить продукт
        </Button>
      </Group>
    );
  }

  return (
    <MantineProvider>
      <SpotlightProvider actions={[]} actionsWrapperComponent={ActionsWrapper}>
        <SpotlightControl />
      </SpotlightProvider>
    </MantineProvider>
  );
}
