'use server';
/**
 * @fileOverview This flow provides a pixel-art themed, game-narrator summary
 *               for an achievement, enhancing the immersive gaming portfolio experience.
 *
 * - achievementOracleSummary - A function that generates a narrated summary for an achievement.
 * - AchievementOracleSummaryInput - The input type for the achievementOracleSummary function.
 * - AchievementOracleSummaryOutput - The return type for the achievementOracleSummary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AchievementOracleSummaryInputSchema = z.object({
  title: z.string().describe('The title of the achievement.'),
  description: z.string().describe('A brief description of the achievement.'),
  xp: z.number().describe('The experience points awarded for the achievement.'),
});
export type AchievementOracleSummaryInput = z.infer<typeof AchievementOracleSummaryInputSchema>;

const AchievementOracleSummaryOutputSchema = z.object({
  summary: z.string().describe('A pixel-art themed, game-narrator summary of the achievement.'),
});
export type AchievementOracleSummaryOutput = z.infer<typeof AchievementOracleSummaryOutputSchema>;

export async function achievementOracleSummary(
  input: AchievementOracleSummaryInput
): Promise<AchievementOracleSummaryOutput> {
  return achievementOracleSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'achievementOracleSummaryPrompt',
  input: { schema: AchievementOracleSummaryInputSchema },
  output: { schema: AchievementOracleSummaryOutputSchema },
  prompt: `You are a retro 16-bit video game narrator, providing flavor text for player achievements.
Your summaries should be pixel-art themed, dramatic, and engaging, fitting a fantasy RPG setting.
Make sure to mention the achievement title, what it entails, and the XP awarded.

Achievement Title: {{{title}}}
Description: {{{description}}}
XP Awarded: {{{xp}}}

Craft a summary that sounds like it's from an old-school video game.`,
});

const achievementOracleSummaryFlow = ai.defineFlow(
  {
    name: 'achievementOracleSummaryFlow',
    inputSchema: AchievementOracleSummaryInputSchema,
    outputSchema: AchievementOracleSummaryOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
